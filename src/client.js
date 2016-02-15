/**
 * The entry point for the browser.
 * Bundled with Webpack and transpiled with Babel for ES6.
 */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div className='container'>
    <div className='page-heading'>
      <h1>It works!</h1>
      <p>Huzzah!</p>
    </div>
  </div>,
  document.getElementById('root')
);
