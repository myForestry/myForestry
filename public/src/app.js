import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

import store from './store';
import routes from './routes';

const history = syncHistoryWithStore(hashHistory, store);

axios.interceptors.response.use(undefined, (err) => {
  if (err.response.status === 401 || err.response.status === 503) {
    console.log(err.response);
    // TODO: Handle Logout
  } else {
    return Promise.reject(err.response);
  }

  return true;
});

axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
