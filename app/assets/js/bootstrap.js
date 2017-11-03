require("../stylus/style.styl");
require("waypoints/lib/noframework.waypoints");

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";
import Work from "./components/Work";
import configureStore from "./store";
import loadData from "./actions/appData";
import "babel-polyfill";

// hack-shim
if (typeof Object.assign !== "function") {
  console.error("polyfill failed");
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2

      if (typeof target !== "undefined" && target !== null) { // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      const to = Object(target);

      for (let index = 1; index < varArgs.length; index++) {
        const nextSource = varArgs[index];

        if (typeof nextSource !== "undefined" && nextSource !== null) { // Skip over if undefined or null
          for (const nextKey in nextSource) {
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

if (!!window.MSInputMethodContext && !!document.documentMode) {
  document.body.classList.add("is-ie");
}

const store = configureStore();

const main = document.getElementById("main");
if (main) {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    main
  );
} else {
  render(
    <Provider store={store}>
      <Work/>
    </Provider>,
    document.getElementById("work")
  );
}


store.dispatch(loadData());
