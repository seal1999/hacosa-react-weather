import * as Constants from '../common/constants';
import firebase from '../common/firebaseConfig';

// action types
export const SIGNUP_SUCCESS = `${Constants.AUTH}/SIGNUP_SUCCESS`;
export const SIGNUP_ERROR = `${Constants.AUTH}/SIGNUP_ERROR`;
export const SIGNIN_SUCCESS = `${Constants.AUTH}/SIGNIN_SUCCESS`;
export const SIGNIN_ERROR = `${Constants.AUTH}/SIGNIN_ERROR`;
export const EMAIL_NOT_VERIFIED = `${Constants.AUTH}/EMAIL_NOT_VERIFIED`;
export const SIGNOUT_SUCCESS = `${Constants.AUTH}/SIGNOUT_SUCCESS`;
export const SIGNOUT_ERROR = `${Constants.AUTH}/SIGNOUT_ERROR`;
export const RESET_SUCCESS = `${Constants.AUTH}/RESET_SUCCESS`;
export const RESET_ERROR = `${Constants.AUTH}/RESET_ERROR`;

// Signing up action (with Firebase)
export const signup = (email, password) => async (dispatch) => {
  try {
    // dispatch(beginApiCall());
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
      })
      .catch(() => {
        // dispatch(apiCallError());
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            "Something went wrong, we couldn't create your account. Please try again.",
        });
      });
  } catch (err) {
    // dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again.",
    });
  }
};

// Signing in action (with Firebase)
export const signin = (email, password, callback) => async (dispatch) => {
  // export const signin = (email, password, history) => async (dispatch) => {
  try {
    // dispatch(beginApiCall());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          console.log('IF', data.user.emailVerified);
          dispatch({ type: SIGNIN_SUCCESS });
          // console.log('history: ', history);
          // history.push('/hacosa-react-weather');
          // console.log('history: ', history);
          callback();
        } else {
          console.log('ELSE', data.user.emailVerified);
          dispatch({
            type: EMAIL_NOT_VERIFIED,
            payload: "You haven't verified your e-mail address.",
          });
        }
      })
      .catch(() => {
        // dispatch(apiCallError());
        dispatch({
          type: SIGNIN_ERROR,
          payload: 'Invalid login credentials',
        });
      });
  } catch (err) {
    // dispatch(apiCallError());
    dispatch({ type: SIGNIN_ERROR, payload: 'Invalid login credentials - 2' });
  }
};

// Signing out action (with Firebase)
export const signout = () => async (dispatch) => {
  try {
    // dispatch(beginApiCall());
    console.log('SIGN OUT-----');
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('SIGN OUT----- SUCCESS');
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        // dispatch(apiCallError());
        dispatch({
          type: SIGNOUT_ERROR,
          payload: 'Error, we were not able to log you out. Please try again.',
        });
      });
  } catch (err) {
    // dispatch(apiCallError());
    dispatch({
      type: SIGNOUT_ERROR,
      payload: 'Error, we were not able to log you out. Please try again.',
    });
  }
};

// Reset password action (with Firebase)
export const resetPassword = (email) => async (dispatch) => {
  try {
    // dispatch(beginApiCall());
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
        // dispatch(apiCallError());
        dispatch({
          type: RESET_ERROR,
          payload:
            "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin.",
        });
      });
  } catch (err) {
    // dispatch(apiCallError());
    dispatch({ type: RESET_ERROR, payload: err });
  }
};

// reducer
export const INITIAL_STATE = {
  authMsg: '',
  email: '',
  isAuth: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SIGNIN_SUCCESS) {
    console.log('AUTH REDUCER : SING-IN SUCCESS --------------');
    return { ...state, authMsg: '', isAuth: true };
  } else if (action.type === SIGNOUT_SUCCESS) {
    console.log('AUTH REDUCER : SIGNOUT_SUCCESS --------------');
    return { ...state, authMsg: '', isAuth: false };
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
};

export default authReducer;
