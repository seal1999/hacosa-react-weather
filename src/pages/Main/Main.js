import React from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import AddCard from "../../components/AddCard/AddCard";

const Main = props => {
  return (
    <div className="main__container">
      <WeatherCard />
      <AddCard />
    </div>
  );
};

export default Main;
