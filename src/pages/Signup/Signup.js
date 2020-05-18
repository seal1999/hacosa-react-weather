import React from 'react';
import "./Signup.css";

const Signup = props => {
    return (
        <div class="main__container">
            <div class="signup-card">
                <div class="signup-content">
                    <span class="signup-header">Signup</span>
                    <form class="signup-form">
                        <input ngModel type="email" autofocus placeholder="Email" name="email" class="signup-input" required />
                        <input ngModel type="password" placeholder="Password" name="password" class="signup-input" minlength="6" required />
                        <input type="submit" name="submit" value="Signup" class="signup-btn" />
                    </form>
                    <div class="login-link-wrapper">
                        <span class="login-notice">Already Have an account?</span>
                        <a class="login-link" routerLink="/login">login</a>
                    </div>
                </div>
                <div class="signup-aside">
                    <div class="signup-aside-overlay"></div>
                    <h1 class="signup-welcome-text">Join Minimus Today!</h1>
                    <hr class="signup-aside-hr" />
                </div>
            </div>
        </div>
    );
}

export default Signup;