// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Background from "./components/Background"; // Import the Background

const apiKey = "ade3193bf7b7ecbe0a06383eb1d9a3d7";

export default function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) {
      setWeatherData(null);
    }
  }, [search]);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data", error);
      setError("Error fetching weather data. Please try again.");
    }
    setLoading(false);
  };

  const handleClick = () => {
    if (search) {
      fetchWeather();
    }
  };

  return (
    <Router>
      <div className="relative flex flex-col h-screen">
        <Background /> {/* Add the Background component */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                weatherData={weatherData}
                handleClick={handleClick}
                loading={loading}
                error={error}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
