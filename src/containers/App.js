import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from '../actions/actionCreators';
import { Switch, Route } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../pages/Main/Main";
import Add from "../pages/Add/Add";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";

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
    const { showMenu, onToggleMenu } = this.props;
    return (
        <div className="container">
          <Container>
            <Aside showMenu={showMenu} />
            <Header onToggleMenu={onToggleMenu} />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/add" component={Add} />
              <Route path="/login" component={Login} />
              <Route path="/details" component={Details} />
            </Switch>
            <Footer />
          </Container>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showMenu : state.navigation.showMenu
});

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(actions.toggleMenu())
})

const enhance = connect(mapStateToProps, mapDispatchToProps);
const AppWithRedux = enhance(App);

export { App, AppWithRedux };
