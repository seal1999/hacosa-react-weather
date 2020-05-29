// react, redux, router
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// module (ducks)
import { signout } from '../module/auth';

// css
import '../css/Aside.css';

const Aside = ({ showMenu, email, signout }) => {
  return (
    <div
      className={
        showMenu ? 'side-menu__container-active' : 'side-menu__container'
      }
    >
      <nav className={showMenu ? 'slide-menu slide-menu-active' : 'slide-menu'}>
        <section className="menu-header">
          <span className="greeting__text">Welcome Back</span>
          <div className="profile-image__container">
            <img
              src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
              alt="profile"
              className="profile__image"
            />
          </div>
          <div className="account-details">
            <span className="name__text">
              {email ? email : 'oops, missing'}
            </span>
            <span className="email__text">Free Plan</span>
          </div>
        </section>
        <section className="menu-body">
          <ul className="menu-links">
            <li className="menu-link">
              <Link to="/home">Home</Link>
            </li>
            <li className="menu-link">
              <Link to="/home/add">Add City</Link>
            </li>
            <li className="menu-link">
              <Link to="/home/details">Details</Link>
            </li>
            <li className="menu-link" onClick={signout}>
              SIGN OUT
            </li>
          </ul>
        </section>
        <section className="menu-footer">
          <small className="copyright__text">
            Copyright © 2020 Teacher.Seal
          </small>
        </section>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showMenu: state.navigationReducer.showMenu,
  email: state.authReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);
export default withRouter(enhance(Aside));
