import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/Aside.css';

const Aside = ({ showMenu, currentUser }) => {
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
            <span className="name__text">userEmail</span>
            <span className="email__text">Free Plan</span>
          </div>
        </section>
        <section className="menu-body">
          <ul className="menu-links">
            <li className="menu-link">
              <Link to="/hacosa-react-weather">Home</Link>
            </li>
            <li className="menu-link">
              <Link to="/add">Add City</Link>
            </li>
            <li className="menu-link">SIGN OUT</li>
            <li className="menu-link">
              <Link to="/details">Details</Link>
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
  showMenu: state.navigation.showMenu,
});

connect(mapStateToProps)(Aside);

export default Aside;
