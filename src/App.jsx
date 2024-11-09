import React, { useState } from "react";
import './styles.css';

export default function App() {
  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
      icon: '☀️',
      backgroundClass: 'güneşli-background',
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
      icon: '🌧️',
      backgroundClass: 'yağmurlu-background',
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
      icon: '❄️',
      backgroundClass: 'karlı-background',
    },
  ];


  const [currentWeatherIndex, setCurrentWeatherIndex] = useState(0);


  const handleNextDay = () => {
    setCurrentWeatherIndex((prevIndex) => (prevIndex + 1) % weatherData.length);
  };

  
  const currentWeather = weatherData[currentWeatherIndex];

  return (
    <div className={`app-container ${currentWeather.backgroundClass}`}>
      <div className='weather-container'>
        <div className='icon'>{currentWeather.icon}</div>
        <div className='condition-text'>{currentWeather.condition}</div>
        <div className='temp-range-container'>
          <div className='low-temp-container'>
            <p className='low-temp-data'>{currentWeather.lowTemp}°</p>
            <p>En Düşük</p>
          </div>
          <div className='high-temp-container'>
            <p className='high-temp-data'>{currentWeather.highTemp}°</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className='day'>{currentWeather.day}</div>
      </div>
      <button onClick={handleNextDay}>Test</button>
    </div>
  );
}
