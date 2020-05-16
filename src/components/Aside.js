import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { connect } from 'react-redux';

import "./Aside.css";

const Aside = ({ showMenu }) => {
  // showMenu를 store에서 가져오려면
  // connect하고 mapStateToProps
  return (
    <div class={showMenu ? "side-menu__container-active" : "side-menu__container"}>
      <nav class={showMenu ? "slide-menu slide-menu-active" : "slide-menu"}>
        <section class="menu-header">
          <span class="greeting__text">Welcome Back</span>
          <div class="profile-image__container">
            <img
              src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
              alt="profile"
              class="profile__image"
            />
          </div>
          <div class="account-details">
            <span class="name__text">userEmail</span>
            <span class="email__text">Free Plan</span>
          </div>
        </section>
        <section class="menu-body">
          <ul class="menu-links">
            <li class="menu-link">Home</li>
            <li class="menu-link"> Add City</li>
            <li class="menu-link">Logout</li>
          </ul>
        </section>
        <section class="menu-footer">
          <small class="copyright__text">Copyright © 2020 Teacher.Seal</small>
        </section>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showMenu: state.navigation.showMenu
});

connect(mapStateToProps)(Aside);

export default Aside;
