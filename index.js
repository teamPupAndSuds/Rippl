import React from 'react'
import ReactDOM from 'react-dom'

import App from './public/components/App.jsx'
import {browserHistory} from 'react-router'
import makeRoutes from './routes.jsx'

const routes = makeRoutes();
ReactDOM.render(
  <App history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);