/**
 * The entry point for the browser.
 * Bundled with Webpack and transpiled with Babel for ES6.
 */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
);
