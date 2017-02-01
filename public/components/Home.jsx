import React, { PropTypes as T } from 'react'
import AuthService from './utils/AuthService.jsx'

export class Home extends React.Component{
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context){
  	super(props, context)
  	this.state = {
  	  profile: props.auth.getProfile()
  	}
  	props.auth.on('profile_updated', (newProfile) => {
  	  this.setState({profile: newProfile})
  	})
  }

  logout(){
  	this.props.auth.logout()
  	this.context.router.push('/login');
  }

  render(){
    console.log('inside home');
  	const {profile} = this.state
  	return (
  	  <div>
  	    <h2>Home</h2>
  	    <p>Hi, {profile.name}!</p>
  	    <button onClick={this.logout.bind(this)}>Logout</button>
  	  </div>
  	)
  }
}
export default Home;