import React from "react";

const WeatherCard = ({ weather, getLocalTime }) => {
  if (!weather) return null;

  return (
    <div className="bg-white/90 rounded-2xl shadow-2xl p-6 w-full sm:w-96 text-center backdrop-blur-lg">
      <h2 className="text-3xl font-bold text-blue-700">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-gray-600 text-sm mb-3">
        Local Time: {getLocalTime(weather.timezone)}
      </p>

      <div className="flex justify-center items-center mt-2 mb-3">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-20 h-20"
        />
        <div>
          <p className="text-5xl font-semibold text-blue-600">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="capitalize text-gray-700 text-lg">
            {weather.weather[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left mt-4 text-gray-700">
        <p>
          <strong>Feels like:</strong> {Math.round(weather.main.feels_like)}°C
        </p>
        <p>
          <strong>Humidity:</strong> {weather.main.humidity}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {weather.wind.speed} m/s
        </p>
        <p>
          <strong>Pressure:</strong> {weather.main.pressure} hPa
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
