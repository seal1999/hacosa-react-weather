// react
import React from 'react';

// components
import WeatherCard from './WeatherCard';
import AddCard from './AddCard';

// css
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
