import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  // do something
  // const navClass = `nav-extended ${props.color}`;
  return (
    <div>
      <h3>Footer</h3>
    </div>
  );
};

Footer.defaultProps = {
  text: "Header text",
  color: "purple darken-4",
  textColor: "white",
};

Footer.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Footer;
