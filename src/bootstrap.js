import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
import history from './history';

import "./style/main.scss";
import Signin from './components/auth/Signin'
// import Signup from './components/auth/Signup'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter history={history}>
        <App>
          <Switch>
            <Route path="/" component={Signin}/>
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
