import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  // do something
  // const navClass = `nav-extended ${props.color}`;
  return (
    <div>
        <h3>Header</h3>
    </div>
  );
};

Header.defaultProps = {
  text: "Header text",
  color: "purple darken-4",
  textColor: "white"
};

Header.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
};

export default Header;
