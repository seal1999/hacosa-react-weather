import React, { Component, Fragment } from 'react';
import Lnb from '../../components/Lnb/Lnb';
import Header from '../../components/Header/Header';

class LoginPage extends Component {
    render() {
        return (
          <Fragment>
              <Lnb/>
              <Header />
              <div>Login Page</div>
          </Fragment>
        );
    }
}

export default LoginPage;