import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import axios from "axios";

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (search) {
      fetchWeather();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex justify-center items-center">
      <div className="w-80 max-w-sm bg-white rounded-lg shadow-md px-4 py-8 flex flex-col items-center">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="Enter City Name"
            className="w-full rounded-lg px-3 py-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleClick}
            className="flex items-center px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaSearchLocation size={20} /> Search
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center mb-4">
            <p className="text-gray-700 font-bold">Loading...</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center mb-4 text-red-500 font-bold">
            <p>{error}</p>
          </div>
        )}

        {weatherData && (
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold">{`City: ${search}`}</h1>
            <h3 className="text-xl font-bold">
              {`Temperature: ${Math.round(weatherData.main.temp - 273.15)}°C`}
            </h3>
            <h4 className="text-xl">{`Sky: ${weatherData.weather[0].main}`}</h4>
            <h4 className="text-xl">
              {`Description: ${weatherData.weather[0].description}`}
            </h4>
          </div>
        )}

        {!loading && !weatherData && (
          <h1 className="text-xl font-bold text-center">
            Search for a city...
          </h1>
        )}
      </div>
    </div>
  );
}
