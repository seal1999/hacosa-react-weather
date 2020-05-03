import React, { Component, Fragment } from 'react';
import Lnb from '../../components/Lnb/Lnb';
import Header from '../../components/Header/Header';

class DetailsPage extends Component {
    render() {
        return (
          <Fragment>
            <Lnb />
            <Header />
            <div>details</div>
          </Fragment>
        );
    }
}

export default DetailsPage;