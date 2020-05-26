import React, { useState } from 'react';
// import { googleProvider } from "../../config/fbConfig";
import '../css/Login.css';

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

const Login = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="main__container">
      <div className="login-card">
        <div className="login-content">
          <span className="login-header">Login</span>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              autoFocus
              placeholder="Email"
              id="email"
              className="login-input"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="login-input"
              minLength="6"
              onChange={handleChange}
              required
            />
            <input
              type="submit"
              name="submit"
              value="Login"
              className="login-btn"
            />
          </form>
          <div className="signup-link-wrapper">
            <span className="signup-notice">Don't have an account?</span>
            <a href="/" className="signup-link">
              Sign up
            </a>
          </div>
        </div>
        <div className="login-aside">
          <div className="login-aside-overlay"></div>
          <h1 className="login-welcome-text">Welcome Back!</h1>
          <hr className="login-aside-hr" />
        </div>
      </div>
    </div>
  );
};

export default Login;
