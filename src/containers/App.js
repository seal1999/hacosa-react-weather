import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  transition: background 300ms linear;
  background-image: linear-gradient(to top, #5ee7df 0%, #66a6ff 100%);
`;

class App extends Component {
  render() {
    const { showMenu, onToggleMenu, currentUser } = this.props;
    return (
      <div className="container">
        <Container>
          <Aside showMenu={showMenu} currentUser={currentUser} />
          <Header onToggleMenu={onToggleMenu} />
          <Switch>
            <Route exact path="/hacosa-react-weather" component={Main} />
            <Route path="/add" component={Add} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showMenu: state.navigation.showMenu,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(toggleMenu()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);
const AppWithRedux = enhance(App);

export default AppWithRedux;
