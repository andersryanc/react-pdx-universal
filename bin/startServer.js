// Babel 6 require() hook. Not for production--pre-transpile instead.
require('babel-register');
require('babel-polyfill');

require('../src/server');
