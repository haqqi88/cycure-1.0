import { createContext, useContext, useState, useEffect } from "react";

export const LearnContext = createContext();

export const useLearnContext = () => {
    return useContext(LearnContext);
}

export const LearnContextProvider = ({ children }) => {
    const [progress, setProgress] = useState(() => {
        const storedProgress = localStorage.getItem("progress");
        const parsedProgress = parseInt(storedProgress, 10);
        return Number.isNaN(parsedProgress) ? 0 : parsedProgress;
      });
    const [progress2, setProgress2] = useState(() => {
        const storedProgress = localStorage.getItem("progress2");
        const parsedProgress = parseInt(storedProgress, 10);
        return Number.isNaN(parsedProgress) ? 0 : parsedProgress;
      });
    const [progress3, setProgress3] = useState(() => {
        const storedProgress = localStorage.getItem("progress3");
        const parsedProgress = parseInt(storedProgress, 10);
        return Number.isNaN(parsedProgress) ? 0 : parsedProgress;
      });
    const [chapter, setChapter] = useState(() =>{JSON.parse(localStorage.getItem("chapter")) 
        const storedChapter = localStorage.getItem("chapter");
        const parsedChapter = parseInt(storedChapter, 10);
        return Number.isNaN(parsedChapter) ? 1 : parsedChapter});
    
      useEffect(() => {
        localStorage.setItem("progress", progress);
        localStorage.setItem("chapter", JSON.stringify(chapter));
        localStorage.setItem("progress2", progress2);
        localStorage.setItem("progress3", progress3);
      }, [progress, chapter, progress2, progress3]); 

    return (
        <LearnContext.Provider value={{progress, setProgress, setChapter, chapter, progress2, setProgress2, progress3, setProgress3 }}>
            { children }
        </LearnContext.Provider>
    );
}