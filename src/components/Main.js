import React from 'react';
import WeatherCard from './WeatherCard';
import AddCard from './AddCard';
import '../css/Main.css';

const Main = (props) => {
  return (
    <div className="main__container">
      <WeatherCard />
      <AddCard />
    </div>
  );
};

export default Main;
