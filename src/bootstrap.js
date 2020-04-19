import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));
import history from './history';

import "./style/main.scss";
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Account from "./components/account/Account";
import Shop from './components/shop/Shop'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Signin}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>

            <Route path='/account' component={Account} />

            <Route path='/shop' component={Shop} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
