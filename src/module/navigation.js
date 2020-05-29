import * as Constants from '../common/constants';

// action types
export const TOGGLE_MENU = `${Constants.NAVI}/TOGGLE_MENU`;
export const CHANGE_LOGIN_MESSAGE_TYPE = `${Constants.NAVI}/CHANGE_LOGIN_MESSAGE_TYPE`;

// actions
export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const changeLoginMessage = (loginMessage) => {
  console.log('Change LoginType : ', loginMessage);
  return {
    type: CHANGE_LOGIN_MESSAGE_TYPE,
    payload: loginMessage,
  };
};

// reducer
export const initialState = {
  showMenu: false,
  loginMessage: Constants.LOGIN_MESSAGE_TYPE,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    case CHANGE_LOGIN_MESSAGE_TYPE:
      const loginMessage = action.payload;
      return {
        ...state,
        loginMessage: loginMessage,
      };
    default:
      return state;
  }
};

export default navigationReducer;
