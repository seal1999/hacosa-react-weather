import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup, signin, resetPassword } from '../reducers/firebase';
import useForm from '../common/useForm';
import validate from '../common/validateLoginForm';
import history from '../common/history';
import Spinner from '../components/Spinner';
import '../css/Login.css';

// TODO: history prop이 전달되지 않는 원인 파악
const Login = ({
  signup,
  signin,
  resetPassword,
  authMsg,
  // history,
  loading,
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
      // signup
      signup(credentials.email, credentials.password);
    } else {
      if (reset) {
        // reset password
        resetPassword(credentials.email);
      } else {
        // signin
        signin(credentials.email, credentials.password, () =>
          history.push('/main'),
        );
      }
    }
  }

  return (
    <div className="main__container">
      <div className="login-card">
        <div className="login-content">
          <span className="login-header">Login</span>
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
              {loading ? (
                <Spinner />
              ) : reset ? (
                'Reset password'
              ) : newUser ? (
                'Create account'
              ) : (
                'Sign in'
              )}
            </button>
            {!newUser && !reset && (
              <button onClick={() => SetReset(true)} className="btn-link">
                Forgot password?
              </button>
            )}
            {reset && (
              <button onClick={() => SetReset(false)} className="btn-link">
                Back to sign in
              </button>
            )}
          </form>
          <footer className="login-footer">
            <p>
              {newUser
                ? 'Already have an account?'
                : "Don't have an account yet?"}
            </p>
            <button
              onClick={() => {
                setNewUser(!newUser);
                if (reset) SetReset(false);
              }}
              className="btn-switch"
            >
              {newUser ? 'Sign in' : 'Create an account'}
            </button>
          </footer>
          <div className="signup-link-wrapper">
            <span className="signup-notice">Don't have an account?</span>
            <a href="/" className="signup-link">
              {reset
                ? 'Reset password'
                : newUser
                ? 'Create an account'
                : 'Sign in'}
            </a>
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
    loading: state.apiStatusReducer.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (email, password) => dispatch(signup(email, password)),
    signin: (email, password, callback) =>
      dispatch(signin(email, password, callback)),
    resetPassword: (email) => dispatch(resetPassword(email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
