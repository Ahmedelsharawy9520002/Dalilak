import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [allProgress, setAllProgress] = useState(() => {
    return JSON.parse(localStorage.getItem("allProgress")) || {};
  });

  useEffect(() => {
    localStorage.setItem("allProgress", JSON.stringify(allProgress));
  }, [allProgress]);

  const updateProgress = (roadmapTitle, completed, total) => {
    const savedUser = localStorage.getItem("user");
    const userEmail = savedUser ? JSON.parse(savedUser).email : "guest";

    setAllProgress((prev) => {
      const userProg = prev[userEmail] || {};
      return {
        ...prev,
        [userEmail]: {
          ...userProg,
          [roadmapTitle]: {
            completed,
            total,
            percent: Math.round((completed / total) * 100),
          }
        }
      };
    });
  };

  const getProgress = () => {
    const savedUser = localStorage.getItem("user");
    const userEmail = savedUser ? JSON.parse(savedUser).email : "guest";
    return allProgress[userEmail] || {};
  };

  return (
    <ProgressContext.Provider value={{ progress: getProgress(), updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
