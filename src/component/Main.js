// react, redux, router
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

// custom hoc
import withAuth from './hoc/withAuth';

// components
import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';
import Weather from './Weather';
import Details from './Details';
import Add from './Add';

// css
import '../css/App.css';

const Main = ({ match, isAuth }) => {
  useEffect(() => {
    const checkAuth = isAuth ? 'OK' : 'NOT-OK';
    console.log(`component did mount with useEffect! ${checkAuth}`);
  });

  return (
    <div className="container">
      <Aside />
      <Header />
      <Switch>
        <Route exact path={match.path} component={Weather} />
        <Route exact path={`${match.path}/add`} component={Add} />
        <Route exact path={`${match.path}/details`} component={Details} />
        <Route
          render={() => (
            <>
              <h3>Oops! There's nothing here. Go back!</h3>
            </>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(withRouter(withAuth(Main)));
