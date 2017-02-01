import React from 'react'
import {browserHistory, Router, Route, Redirect} from 'react-router'

import makeMainRoutes from './../routes.jsx'

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
  	<Route path='localhost:3000/'>
  	  {main}
  	</Route>
  )
}

export default makeRoutes