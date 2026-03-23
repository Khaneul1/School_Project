import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './WeatherSelector.css';

const WeatherSelector = ({ selectedWeather, setSelectedWeather }) => {
  const weatherOptions = [
    { label: '맑음', icon: <WbSunnyIcon /> },
    { label: '구름', icon: <CloudIcon /> },
    { label: '비', icon: <UmbrellaIcon /> },
    { label: '눈', icon: <AcUnitIcon /> },
  ];
  return (
    <div className="weather-selector-section">
      <span>날씨</span>
      {weatherOptions.map((weather) => (
        <button
          key={weather.label}
          onClick={() => setSelectedWeather(weather.label)}
          className={`weather-icon-btn ${
            selectedWeather === weather.label ? 'selected' : ''
          }`}
        >
          {weather.icon}
        </button>
      ))}
    </div>
  );
};

export default WeatherSelector;
