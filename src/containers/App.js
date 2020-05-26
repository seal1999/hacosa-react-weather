import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../reducers/navigation';
import { Switch, Route } from 'react-router-dom';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Add from '../components/Add';
import Login from '../components/Login';
import Details from '../components/Details';
import NoMatch from '../components/NoMatch';
import '../css/App.css';

const App = ({ showMenu, onToggleMenu }) => {
  return (
    <div className="container">
      <Aside showMenu={showMenu} />
      <Header onToggleMenu={onToggleMenu} />
      <Switch>
        <Route exact path="/hacosa-react-weather" component={Main} />
        <Route path="/add" component={Add} />
        <Route path="/login" component={Login} />
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
const AppWithRedux = enhance(App);

export default AppWithRedux;
