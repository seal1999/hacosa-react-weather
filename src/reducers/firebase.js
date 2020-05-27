import * as Constants from '../common/constants';
import firebase from '../common/firebaseConfig';

// actions
export const BEGIN_API_CALL = `${Constants.AUTH}/BEGIN_API_CALL`;
export const API_CALL_ERROR = `${Constants.AUTH}/API_CALL_ERROR`;
export const SIGNUP_SUCCESS = `${Constants.AUTH}/SIGNUP_SUCCESS`;
export const SIGNUP_ERROR = `${Constants.AUTH}/SIGNUP_ERROR`;
export const SIGNIN_SUCCESS = `${Constants.AUTH}/SIGNIN_SUCCESS`;
export const SIGNIN_ERROR = `${Constants.AUTH}/SIGNIN_ERROR`;
export const EMAIL_NOT_VERIFIED = `${Constants.AUTH}/EMAIL_NOT_VERIFIED`;
export const SIGNOUT_SUCCESS = `${Constants.AUTH}/SIGNOUT_SUCCESS`;
export const SIGNOUT_ERROR = `${Constants.AUTH}/SIGNOUT_ERROR`;
export const RESET_SUCCESS = `${Constants.AUTH}/RESET_SUCCESS`;
export const RESET_ERROR = `${Constants.AUTH}/RESET_ERROR`;

// action creator
export const beginApiCall = () => ({ type: BEGIN_API_CALL });
export const apiCallError = () => ({ type: API_CALL_ERROR });
// Signing up with Firebase
export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((dataBeforeEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          user.sendEmailVerification();
        });
      })
      .then((dataAfterEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // Sign up successful
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                'Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.',
            });
          } else {
            // Signup failed
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Something went wrong, we couldn't create your account. Please try again.",
            });
          }
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again.",
    });
  }
};

// Signing in with Firebase
export const signin = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          console.log('IF', data.user.emailVerified);
          dispatch({ type: SIGNIN_SUCCESS });
          callback();
        } else {
          console.log('ELSE', data.user.emailVerified);
          dispatch({
            type: EMAIL_NOT_VERIFIED,
            payload: "You haven't verified your e-mail address.",
          });
        }
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: SIGNIN_ERROR, payload: 'Invalid login credentials - 2' });
  }
};

// Signing out with Firebase
export const signout = () => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNOUT_ERROR,
          payload: 'Error, we were not able to log you out. Please try again.',
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNOUT_ERROR,
      payload: 'Error, we were not able to log you out. Please try again.',
    });
  }
};

// Reset password with Firebase
export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        dispatch({
          type: RESET_SUCCESS,
          payload:
            "Check your inbox. We've sent you a secured reset link by e-mail.",
        }),
      )
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: RESET_ERROR,
          payload:
            "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: RESET_ERROR, payload: err });
  }
};

// reducer
const INITIAL_STATE = {
  authMsg: '',
};

export default function (state = INITIAL_STATE, action) {
  if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
    return { ...state, authMsg: '' };
  } else if (
    action.type === SIGNUP_SUCCESS ||
    action.type === SIGNUP_ERROR ||
    action.type === SIGNIN_ERROR ||
    action.type === EMAIL_NOT_VERIFIED ||
    action.type === SIGNOUT_ERROR ||
    action.type === RESET_SUCCESS ||
    action.type === RESET_ERROR
  ) {
    return { ...state, authMsg: action.payload };
  } else {
    return state;
  }
}
