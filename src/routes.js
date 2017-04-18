/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import Login from './components/login/Login';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="login" component={Login} />
  </Route>
);
