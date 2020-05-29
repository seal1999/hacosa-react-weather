import * as Constants from '../common/constants';

// action types
export const FETCH_WEATHER = `${Constants.WEATHER}/FETCH_WEATHER`;
export const FETCH_WEATHER_START = `${Constants.WEATHER}/FETCH_WEATHER_START`;
export const FETCH_WEATHER_SUCCESS = `${Constants.WEATHER}/FETCH_WEATHER_SUCCESS`;
export const FETCH_WEATHER_FAIL = `${Constants.WEATHER}/FETCH_WEATHER_FAIL`;

// actions
export const fetchWeatherStart = () => ({ type: FETCH_WEATHER_START });
export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});
export const fetchWeatherFail = (error) => ({
  type: FETCH_WEATHER_FAIL,
  payload: error,
});

// reducer
export const initialState = {
  data: [],
  isLoading: false,
  errorMessage: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      const { city, list } = action.payload;
      const obj = {
        city,
        list,
      };
      return {
        ...state,
        isLoading: false,
        data: [obj].concat(state.data),
        errorMessage: '',
      };
    case FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Cannot find the city you just typed',
      };
    default:
      return state;
  }
};

export default weatherReducer;
