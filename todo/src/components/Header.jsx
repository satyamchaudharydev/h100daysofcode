import React from "react";
import useThemeDetector from "../hooks/useThemeDetector";
export default function Header() {
  const { isDarkTheme, currentTheme } = useThemeDetector();

  return (
    <header className="space-bw">
      <h1 className="title">Todo</h1>
      <button onClick={() => currentTheme()}>
        {!isDarkTheme ? (
          <img src="/images/icon-moon.svg" alt="" srcset="" />
        ) : (
          <img src="/images/icon-sun.svg" alt="" srcset="" />
        )}
      </button>
    </header>
  );
}
