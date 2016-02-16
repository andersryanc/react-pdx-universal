import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import MyApp from './components/MyApp';

export default (
  <Route path='/' component={MyApp}>
    <IndexRedirect to='/home' />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='*' component={NotFound} status={404} />
  </Route>
);
