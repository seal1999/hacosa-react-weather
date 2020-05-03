import React, { Component, Fragment } from 'react';
import Lnb from '../../components/Lnb/Lnb';
import Header from '../../components/Header/Header';

class AddCityPage extends Component {
    render() {
        return (
          <Fragment>
              <Lnb/>
              <Header />
              <div>AddCity</div>
          </Fragment>
        );
    }
}

export default AddCityPage;