import React, { Component, Fragment } from 'react';
import Lnb from '../../components/Lnb/Lnb';
import Header from '../../components/Header/Header';

class MainPage extends Component {
    render() {
        return (
          <Fragment>
              <Lnb />
              <Header />
              <div>Main Page</div>
          </Fragment>
        );
    }
}

export default MainPage;