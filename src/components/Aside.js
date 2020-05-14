import React from "react";
import PropTypes from "prop-types";

const Aside = props => {
  // do something
  // const navClass = `nav-extended ${props.color}`;
  return (
    <div>
      <h3>Aside</h3>
    </div>
  );
};

Aside.defaultProps = {
  text: "Header text",
  color: "purple darken-4",
  textColor: "white",
};

Aside.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Aside;
