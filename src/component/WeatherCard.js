// react
import React from 'react';

// css
import '../css/WeatherCard.css';

const WeatherCard = (props) => {
  return (
    <section className="weather__card">
      <span className="city-name__text"> cityName </span>
      <div className="weather-icon__container">SVGs</div>
    </section>
  );
};

export default WeatherCard;
