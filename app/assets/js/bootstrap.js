require('../stylus/style.styl');
require('waypoints/lib/noframework.waypoints.js');

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import NewsApp from './components/news-app/NewsApp';
import configureStore from './store';
import loadData, {loadNews} from './actions/appData';

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

