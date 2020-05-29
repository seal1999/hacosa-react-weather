// redux
import { combineReducers } from 'redux';

// custom reducers
import authReducer from './auth';
import navigationReducer from './navigation';
import weatherReducer from './weather';

// use Ducks : a modular pattern that collocates action types, actions and reducers.
const rootReducer = combineReducers({
  // firebase auth control (email/password type)
  authReducer,
  // component control (ex: toggle menu, trnsform login/signup page)
  navigationReducer,
  // weather control (use )
  weatherReducer,
});

export default rootReducer;
