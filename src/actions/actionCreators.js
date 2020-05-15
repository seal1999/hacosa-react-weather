import axios from "axios";
import * as types from "./actionTypes";

const API_KEY = "15e39f24e05f6ea0af88f89dc11e5295";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

/*
    action 객체를 만드는 액션 생성자들을 선언 (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미
*/
export const toggleMenu = () => ({
  type: types.TOGGLE_MENU
})

function fetchWeatherStart() {
  const action = { type: types.FETCH_WEATHER_START };
  return action;
}

function fetchWeatherSuccess(data) {
  const action = { type: types.FETCH_WEATHER_SUCCESS, payload: data };
  return action;
}

function fetchWeatherFail(error) {
  const action = { type: types.FETCH_WEATHER_FAIL, payload: error };
  return action;
}

export function fetchWeather(city) {
  const promise = axios({
    url: `${ROOT_URL}&q=${city}`,
    method: "get"
  });
  return function(dispatch) {
    dispatch(fetchWeatherStart());
    return promise
      .then(res => {
        dispatch(fetchWeatherSuccess(res.data));
        return res;
      })
      .catch(error => {
        dispatch(fetchWeatherFail(error));
        return error;
      });
  };
}
