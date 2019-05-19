require('../stylus/style.styl');
require('waypoints/lib/noframework.waypoints.js');

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import NewsApp from './components/news-app/NewsApp';
import configureStore from './store';
import loadData, { loadNews } from './actions/appData';

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target/*, _varArgs*/) { // .length of function is 2
      if (target === null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      const to = Object(target);

      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];

        if (nextSource !== null) { // Skip over if undefined or null
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
  document.body.classList.add('is-ie');
}

const store = configureStore();

const main = document.getElementById('main');
if (main) {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    main
  );
  store.dispatch(loadData());
}

const news = document.getElementById('news');
if (news) {
  render(
    <Provider store={store}>
      <NewsApp/>
    </Provider>,
    news
  );
  store.dispatch(loadNews());
}

