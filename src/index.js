/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.css';
import './styles/styles.css'; // web pack comprime esto ;)


render (
   <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
