import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchWeather = async () => {
    if (!city) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
      );
      const geoData = await geoResponse.json();
      if (!geoData.results) {
        throw new Error("City not found!");
      }
      const { latitude, longitude } = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.current_weather);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="parent">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Fetch Weather</button>
      {loading && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}
      {weather && !loading && (
        <div>
          <h2 className="temp">Temperature: {weather.temperature}°C</h2>
          <p className="wind">Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
