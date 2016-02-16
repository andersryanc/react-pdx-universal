/**
 * The entry point for the browser.
 * Bundled with Webpack and transpiled with Babel for ES6.
 */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
