// src/pages/Home.jsx
import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home({
  search,
  setSearch,
  weatherData,
  handleClick,
  loading,
  error,
}) {
  return (
    <div className="flex-grow bg-gradient-to-b from-blue-900 to-blue-700 flex justify-center items-center">
      <div className="w-80 max-w-sm bg-white rounded-lg shadow-md px-4 py-8 flex flex-col items-center">
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleClick={handleClick}
        />

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

        <WeatherCard weatherData={weatherData} />

        {!loading && !weatherData && (
          <h1 className="text-xl font-bold text-center">
            Search for a city...
          </h1>
        )}
      </div>
    </div>
  );
}
