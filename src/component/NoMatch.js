// react
import React from 'react';

// custom hoc
import withAuth from '../component/hoc/withAuth';
// CSS Module sample
import '../css/NoMatch.module.css';

const NoMatch = (props) => {
  return <div className="nomatch">404</div>;
};

export default withAuth(NoMatch);
