import React, { PropTypes as T } from 'react'
import AuthService from './utils/AuthService.jsx'
import Stats from './Stats.jsx'

export class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      query: '',
      list: []
    }
    this.getData = this.getData.bind(this);
  }

  static contextTypes = {
  	router: T.object
  }
  
  static propTypes = {
  	location: T.object,
  	auth: T.instanceOf(AuthService)
  }


  getData(){
    var that = this;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/rippl/user/RipplMaster',
      dataType: 'json',
      success: function(data){
        console.log('success! ' + {data});
        that.setState({list: data});
      }, 
      error: function(err){
        console.log(err);
        console.log('didnt work');
      }
    });
  }


  render(){
  	const {auth} = this.props
    console.log('inside login');
    console.log('this is state ' + this.state.list);
  	return (
  	  <div>
  	    <h2>Login</h2>
  	    <button onClick={auth.login.bind(this)}>Login</button>
        <h4>Stats test</h4>
        <form>Enter twitter username:<br/><input type="text" value={this.state.query} onChange={this.handleChange}/></form>
        <button onClick={this.getData.bind(this)}>Get Twitter Data</button>
        <Stats data={this.state.list}/>
  	  </div>
  	)
  }
}

export default Login;