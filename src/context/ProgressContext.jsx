import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

const safeJSONParse = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved && saved !== "undefined" ? JSON.parse(saved) : fallback;
  } catch (e) {
    return fallback;
  }
};

export const ProgressProvider = ({ children }) => {
  const [allProgress, setAllProgress] = useState(() => {
    return safeJSONParse("allProgress", {});
  });

  useEffect(() => {
    localStorage.setItem("allProgress", JSON.stringify(allProgress));
  }, [allProgress]);

  const updateProgress = (roadmapTitle, completed, total) => {
    const savedUser = safeJSONParse("user", null);
    const userEmail = savedUser ? savedUser.email : "guest";

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
    const savedUser = safeJSONParse("user", null);
    const userEmail = savedUser ? savedUser.email : "guest";
    return allProgress[userEmail] || {};
  };

  return (
    <ProgressContext.Provider value={{ progress: getProgress(), updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
