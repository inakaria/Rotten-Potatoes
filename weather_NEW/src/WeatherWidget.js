import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';


const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19bdd6f5c1be7a1185d1f79fedf5d065&units=metric`);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
        } else {
          setError('Invalid City Name! Please try again.');
        }
      } catch (error) {
        setError('An error occurred while fetching weather data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-widget">
      {weatherData && (
        <div className="weather-data">
          <div className="container-helper">
            <div className="search-container">
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleCityChange}
              />
              <div className="status">
                {isLoading && <div className="loading">Loading...</div>}
                {error && <div className="error">{error}</div>}
              </div>
            </div>
            <div className="show-weather">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}/>
              <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
              <div className="weather-description">{weatherData.weather[0].description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
