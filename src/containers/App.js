import React from 'react';
import { connect } from 'react-redux';

import Main from './Main';
import Login from './Login';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Loader from '../components/Loader';

const App = ({ firebase, auth }) => {
  return (
    <div>
      {isLoaded(auth) ? <Loader /> : !isEmpty(auth) ? <Main /> : <Login />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth,
  };
}

export default connect(mapStateToProps)(App);
