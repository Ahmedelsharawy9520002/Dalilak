import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    return JSON.parse(localStorage.getItem("progress")) || {};
  });

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (roadmapTitle, completed, total) => {
    setProgress((prev) => ({
      ...prev,
      [roadmapTitle]: {
        completed,
        total,
        percent: Math.round((completed / total) * 100),
      },
    }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
