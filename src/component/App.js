// react, router
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// component
import Main from './Main';
import Login from './Login';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={NoMatch} /> {/* dummy index */}
      <Route path="/home" component={Main} />
      <Route path="/login" component={Login} />
    </Fragment>
  );
};
export default App;
