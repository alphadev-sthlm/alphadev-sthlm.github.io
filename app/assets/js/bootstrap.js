require("../stylus/style.styl");
require("waypoints/lib/noframework.waypoints");

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store";
import loadData from "./actions/appData";

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

if (!!window.MSInputMethodContext && !!document.documentMode)
{
  document.body.classList.add("is-ie");
}

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("main")
);

store.dispatch(loadData());
