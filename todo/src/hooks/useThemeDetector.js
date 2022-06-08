import { React, useState, useEffect } from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e) => {
    setIsDarkTheme(e.matches);
  };
  const currentTheme = () => {
    if (isDarkTheme) {
      document.body.classList.toggle("light-theme");
      // localStorage.setItem("theme", "light");
    } else {
      document.body.classList.toggle("dark-theme");
      // localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return { isDarkTheme, currentTheme };
};

export default useThemeDetector;
