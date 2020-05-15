import React from "react";
import "./Aside.css";

const Aside = props => {
  const showMenu = false;
  return (
    <div
      class={showMenu ? "side-menu__container-active" : "side-menu__container"}
    >
      <nav class="slide-menu">
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
          <small class="copyright__text">Copyright © 2019 Minimus</small>
        </section>
      </nav>
    </div>
  );
};

export default Aside;
