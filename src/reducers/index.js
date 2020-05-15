import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { navigationReducer } from "./navigationReducer";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  weather: weatherReducer
});

export default rootReducer;
