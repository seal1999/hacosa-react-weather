// react, redux
import React from 'react';
import { connect } from 'react-redux';

// module (ducks)
import { toggleMenu } from '../module/navigation';

// css, style assets
import '../css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from '../asset/seal-small.png';

const Header = ({ toggleMenu }) => {
  return (
    <div className="main__header">
      <div className="left__section">
        {/* hamberger icon */}
        <MenuIcon
          onClick={toggleMenu}
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  showMenu: state.navigationReducer.showMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(Header);
