import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import LoginPage from './views/LoginPage/LoginPage'
import AddCityPage from './views/AddCityPage/AddCityPage';
import MainPage from './views/MainPage/MainPage';
import DetailsPage from './views/DetailsPage/DetailsPage';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/addcity" component={AddCityPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
