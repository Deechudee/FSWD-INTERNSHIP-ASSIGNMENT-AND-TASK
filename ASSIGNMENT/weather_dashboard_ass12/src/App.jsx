import { useState } from "react";
import "./App.css";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "850095b6bd32f553b4781c303e6778d6";

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
        <h1>🌦 Weather App</h1>

        <input
          type="text"
          className="input"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="button" onClick={fetchWeather}>
          Get Weather
        </button>

        {loading && <p>⏳ Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="card">
            <h2>{weather.name}</h2>
            <p>🌡 Temp: <b>{weather.main.temp}°C</b></p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬 Wind: {weather.wind.speed} m/s</p>
            <p>🌥 {weather.weather[0].description}</p>
          </div>
        )}
    </div>
  );
}

export default App;