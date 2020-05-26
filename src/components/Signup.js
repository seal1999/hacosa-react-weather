import React from 'react';
import '../css/Signup.css';

const Signup = (props) => {
  return (
    <div className="main__container">
      <div className="signup-card">
        <div className="signup-content">
          <span className="signup-header">Signup</span>
          <form className="signup-form">
            <input
              ngModel
              type="email"
              autofocus
              placeholder="Email"
              name="email"
              className="signup-input"
              required
            />
            <input
              ngModel
              type="password"
              placeholder="Password"
              name="password"
              className="signup-input"
              minlength="6"
              required
            />
            <input
              type="submit"
              name="submit"
              value="Signup"
              className="signup-btn"
            />
          </form>
          <div className="login-link-wrapper">
            <span className="login-notice">Already Have an account?</span>
            <a className="login-link" routerLink="/login">
              login
            </a>
          </div>
        </div>
        <div className="signup-aside">
          <div className="signup-aside-overlay"></div>
          <h1 className="signup-welcome-text">Join Minimus Today!</h1>
          <hr className="signup-aside-hr" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
