import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // use import.meta.env.VITE_WEATHER_API_KEY
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found. Please enter a valid city name.");
    }
  };

  const getLocalTime = (timezone) => {
    const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezone * 1000);
    return localTime.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
        🌤️ Weather Finder
      </h1>

      {/* Search box */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="px-4 py-3 rounded-xl text-lg shadow-md focus:outline-none w-full sm:w-72 text-gray-800"
        />
        <button
          onClick={fetchWeather}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 shadow-md transition-all duration-300"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-md">
          {error}
        </div>
      )}

      {/*WeatherCard Component */}
      {weather && <WeatherCard weather={weather} getLocalTime={getLocalTime} />}

      {/* Footer */}
      <p className="text-white text-sm mt-10 opacity-80">
        Built by Siddharth using React & TailwindCSS
      </p>
    </div>
  );
};

export default App;
