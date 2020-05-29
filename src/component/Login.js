// react, redux, router
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// module (ducks)
import { signup, signin, resetPassword } from '../module/auth';
import { changeLoginMessage } from '../module/navigation';

// common utils
import useForm from '../common/useForm';
import validate from '../common/validateLoginForm';
import * as Constants from '../common/constants';

// css
import '../css/Login.css';

const Login = ({
  signup,
  signin,
  resetPassword,
  authMsg,
  history,
  loginMessage,
  setLogin,
  setSignup,
}) => {
  const [newUser, setNewUser] = useState(false);
  const [reset, SetReset] = useState(false);
  const [credentials, handleChange, handleSubmit, errors] = useForm(
    login,
    validate,
    reset,
  );

  function login() {
    if (newUser) {
      signup(credentials.email, credentials.password);
    } else {
      if (reset) {
        resetPassword(credentials.email);
      } else {
        signin(credentials.email, credentials.password, () =>
          history.push('/home'),
        );
      }
    }
  }

  return (
    <div className="main__container">
      <div className="login-card">
        <div className="login-content">
          <span className="login-header">{loginMessage.title}</span>
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <input
              type="email"
              autoFocus
              placeholder="Email"
              id="email"
              name="email"
              value={credentials.email}
              className="login-input"
              onChange={handleChange}
              required
            />
            {errors.emailIsEmpty && <small>{errors.emailIsEmpty}</small>}
            {errors.emailFormatInvalid && (
              <small>{errors.emailFormatInvalid}</small>
            )}

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="login-input"
              value={credentials.password}
              minLength="6"
              onChange={handleChange}
              required
            />
            {errors.passIsStrong && <small>{errors.passIsStrong}</small>}
            {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}

            {/* BUTTONS */}
            <button
              type="submit"
              name="submit"
              value="Login"
              className="login-btn"
            >
              {loginMessage.btnCaption}
            </button>
          </form>
          <div className="signup-link-wrapper">
            <span className="signup-notice">{loginMessage.altMessage}</span>
            <span
              className="signup-link"
              onClick={
                loginMessage.altUrl.indexOf('signup') !== -1
                  ? setSignup
                  : setLogin
              }
            >
              {loginMessage.altTitle}
            </span>
          </div>
        </div>
        <div className="login-aside">
          <div className="login-aside-overlay"></div>
          <h1 className="login-welcome-text">
            {authMsg && <p className="auth-message">{authMsg}</p>}
          </h1>
          <hr className="login-aside-hr" />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authMsg: state.authReducer.authMsg,
    loginMessage: state.navigationReducer.loginMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (email, password) => dispatch(signup(email, password)),
    signin: (email, password, callback) =>
      dispatch(signin(email, password, callback)),
    resetPassword: (email) => dispatch(resetPassword(email)),
    setLogin: () => dispatch(changeLoginMessage(Constants.LOGIN_MESSAGE_TYPE)),
    setSignup: () =>
      dispatch(changeLoginMessage(Constants.SIGNUP_MESSAGE_TYPE)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
