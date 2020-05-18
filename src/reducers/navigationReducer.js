import * as actions from "../actions/actionTypes";

export const initialState = {
  showMenu: false
};

export function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };
    default:
      return state;
  }
}
