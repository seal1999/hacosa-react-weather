import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducers/navigation';
import { Switch, Route } from 'react-router-dom';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Weather from '../components/Weather';
import Add from '../components/Add';
import Details from '../components/Details';
import NoMatch from '../components/NoMatch';
import '../css/App.css';

const Main = ({ showMenu, onToggleMenu }) => {
  return (
    <div className="container">
      <Aside showMenu={showMenu} />
      <Header onToggleMenu={onToggleMenu} />
      <Switch>
        <Route exact path="/main" component={Weather} />
        <Route path="/add" component={Add} />
        <Route path="/details" component={Details} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  showMenu: state.navigation.showMenu,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(toggleMenu()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(Main);
