// import App from './App.jsx';

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import {browserHistory} from 'react-router'
import makeRoutes from './utils/routes.jsx'

const routes = makeRoutes();
ReactDOM.render(
  <App history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);