import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from './utils/AuthService.jsx'
import Container from './Container.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Stats from './Stats.jsx'
import AuthKeys from './../../server/config/auth0config.js'

const auth = new AuthService(AuthKeys['key'], AuthKeys['url']);

//this will check if the user is logged in. if they aren't throw them back to login page
const requireAuth = (nextState, replace) => {
  console.log('inside requireAuth: ' + auth.loggedIn());
  if(!auth.loggedIn()) {
  	replace({pathname: '/login'})
  }
}

const test = () => {
  console.log('this is the test function ' + auth.loggedIn());
}

export const makeMainRoutes = () => {
  return (
  	<Route path="/" component={Container} auth={auth}>
  	  <IndexRedirect to="/home" />
  	  <Route path="home" component={Home} onEnter={requireAuth} />
  	  <Route path="login" component={Login} onEnter={test}/>
      <Route path="access_token=:token" component={Login} onEnter={test}/>
      <Route path="stats" component={Stats} />
  	</Route>
  )
}

export default makeMainRoutes