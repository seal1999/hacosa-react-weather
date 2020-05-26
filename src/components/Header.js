import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from '../css/seal-small.png';
import '../css/Header.css';

const HeaderDiv = styled.div`
  background-color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  margin: 0;
  min-height: 4rem;
  align-items: center;
  animation: slidedown 0.5s ease-in-out, fadein 1s ease-in-out;
`;

const Header = ({ onToggleMenu }) => {
  return (
    <HeaderDiv>
      <div className="left__section">
        <MenuIcon
          onClick={onToggleMenu}
          className="hamburger__icon"
          color="primary"
          fontSize="large"
        />
        <img src={Profile} alt="Profile" className="logo__icon" />
      </div>
      <h3 className="date__text">Today</h3>
      <div className="mode-toggle__container">
        <span className="mode-toggle__text">Light</span>
        <label className="toggle-button__container">
          <input type="checkbox" className="mode-toggle__input" />
          <span className="mode-toggle__bg"></span>
          <span className="mode-toggle__circle"></span>
        </label>
        <span className="mode-toggle__text">Dark</span>
      </div>
    </HeaderDiv>
  );
};

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

Header.defaultProps = {
  onToggleMenu: () => console.warn('onToggleMenu not defined'),
};

export default Header;
