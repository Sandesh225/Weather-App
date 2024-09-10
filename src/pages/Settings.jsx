// src/pages/Settings.jsx
import React, { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex-grow bg-gradient-to-b from-blue-900 to-blue-700 flex justify-center items-center">
      <div className="text-white text-center max-w-md">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="mt-4">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Toggle Theme: {theme}
          </button>
        </div>
      </div>
    </div>
  );
}
