import React from 'react';
import WeatherCard from './WeatherCard';
import AddCard from './AddCard';
import '../css/Weather.css';

const Weather = (props) => {
  return (
    <div className="main__container">
      <WeatherCard />
      <AddCard />
    </div>
  );
};

export default Weather;
