import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from '../actions/actionCreators';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  transition: background 300ms linear;
  background-image: linear-gradient(to top, #5ee7df 0%, #66a6ff 100%);
`;

/*
  component안에서 method의 실행순서
  (1) 컴포넌트 생성시: constructor -> componentWillMount -> render -> componentDidMount
  (2) 컴포넌트 제거시: componentWillUnmount 
  (3) 컴포넌트의 props 변경시: componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
  (4) 컴포넌트의 state 변경시: shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 
*/
class App extends Component {
  componentDidMount() {
    // 컴포넌트 생성이 끝나고 실행될 초기화 로직, 예: Add된 도시 날씨를 읽어오기 
    // this.props.fetchWeather("San Francisco");
  }

  render() {
    const { showMenu, onToggleMenu } = this.props;
    return (
      <div className="container">
        <Container>
          {/* 컴포넌트는 Aside, Head, Main, Footer로 구성 */}
          <Aside showMenu={showMenu} />
          <Header onToggleMenu={onToggleMenu} />
          <Main />
          <Footer />
        </Container>
      </div>
    );
  }
}

/*
  redux에 의해 관리되는 state를 가져와서 props를 통해 컨테이너 컴포넌트에서 사용가능하도록 매핑
*/
const mapStateToProps = (state) => ({
  showMenu : state.navigation.showMenu
});

/* 
  action creator를 props에 bind하고, dispatch 함수를 통해 모든 reducer에게 전달
  이 함수에서 전달된 것들은 UserList 컨테이너의 props로 사용
*/
const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(actions.toggleMenu())
})

const enhance = connect(mapStateToProps, mapDispatchToProps);
const AppWithRedux = enhance(App);

export { App, AppWithRedux };
