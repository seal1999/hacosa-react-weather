import React from 'react';
import "./Login.css";

const Login = props => {
    return (
        <div className="main__container">
            <div className="login-card">
                <div className="login-content">
                    <span className="login-header">Login</span>
                    <form className="login-form">
                        <input type="email" autoFocus placeholder="Email" name="email" className="login-input" required />
                        <input type="password" placeholder="Password" name="password" className="login-input" minLength="6" required />
                        <input type="submit" name="submit" value="Login" className="login-btn" />
                    </form>
                    <div className="signup-link-wrapper">
                        <span className="signup-notice">Don't have an account?</span>
                        <a href="/" className="signup-link">Sign up</a>
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
}

export default Login;