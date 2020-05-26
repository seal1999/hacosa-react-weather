import * as Constants from '../common/constants';

// actions
export const TOGGLE_MENU = `${Constants.NAVI}/TOGGLE_MENU`;

// action creators
export const toggleMenu = () => ({ type: TOGGLE_MENU });

// reducer
export const initialState = {
  showMenu: false,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    default:
      return state;
  }
};
export default navigationReducer;
