import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from './utils/AuthService.jsx'
import Container from './Container.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'

const auth = new AuthService('HlE40W7Qd5ICbcHfVE6PUj11xAWGJXBR', 'rippl.auth0.com');

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
  	</Route>
  )
}

export default makeMainRoutes