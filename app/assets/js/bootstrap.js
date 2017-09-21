require("../stylus/style.styl");
require("waypoints/lib/noframework.waypoints");

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store";
import loadData from "./actions/appData";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("main")
);

store.dispatch(loadData());
