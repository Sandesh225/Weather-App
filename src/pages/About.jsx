// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="flex-grow bg-gradient-to-b from-blue-900 to-blue-700 flex justify-center items-center">
      <div className="text-white text-center max-w-md">
        <h1 className="text-3xl font-bold">About WeatherApp</h1>
        <p className="mt-4">
          WeatherApp provides up-to-date weather information for cities around
          the world. Built with React and Tailwind CSS, it offers a sleek and
          modern interface.
        </p>
      </div>
    </div>
  );
}
