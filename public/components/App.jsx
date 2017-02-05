import React, { PropTypes } from 'react';
import { Router } from 'react-router';
// import AuthService from './utils/AuthService.jsx';
// import Api from './utils/Api.jsx';
// import TestPage from './TestPage.jsx';
import Stats from './Stats.jsx';

class App extends React.Component {
  static contextType = {
    router: PropTypes.object
  }

  static propType = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  }

  get content(){
    return (
      <Router
        history={this.props.history}
        routers={this.props.routes} />
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <Router history={this.props.history} routes={this.props.routes}/>
  //     </div>
  //   )
  // }
  render() {
    return (
      <Stats />
    )
  }
}

// const initialState = {userLoggedIn: false}

// class App extends React.Component{
//   componentDidMount(){
//     this.api = new Api();
//     console.log(this.api.isLoggedIn());
//     this.setState({
//       userLoggedIn: this.api.isLoggedIn()
//     })
//   }

//   constructor(){
//   	super();
//     this.api = new Api();
//     this.state = {
//       userLoggedIn: this.api.isLoggedIn()
//     }
//     //creates a new instance of AuthService
//     this.doLogin = this.doLogin.bind(this);
//     this.doLogout = this.doLogout.bind(this);
//     this.testAuths = this.testAuths.bind(this);
//     this.test = this.test.bind(this);
//   }

//   componentWillMount(){
//     this.api = new Api();
//     console.log(this.api.getToken());
//     this.setState({
//       userLoggedIn: this.api.isLoggedIn()
//     })
//   }

//   async checkForLoggedIn(){
//     try {
//       this.setState({
//         userLoggedIn: this.api.isLoggedIn()
//       })
//     } catch(err) {
//       console.log('error! ' + err);
//     }
//   }


//   doLogin(){
//     console.log('in button');
//     this.api.login.bind(this);
//     console.log(this.state.userLoggedIn);
//     this.api.login();
//     this.setState({
//       userLoggedIn: !this.state.userLoggedIn
//     });
//   }

//   doLogout(){
//     this.api.logout.bind(this);
//     this.api.logout();
//     console.log(this.api.isLoggedIn());
//     this.testAuths();
//   }

//   testAuths(){
//     if(this.api.isLoggedIn()){
//       return(
//         <div>logged in!</div>
//       )
//     }
//   }

//   test(){
//     this.setState({
//       userLoggedIn: !this.state.userLoggedIn
//     })
//   }


//   render(){
//     console.log(this.state.userLoggedIn);
//     const stuff = <div>hi</div>
//   	return(
//   	  <div>
//   	    <button onClick={this.doLogin}>Login</button>
//         <button onClick={this.doLogout}>Logout</button>
//         <button onClick={this.test}>Update State</button>
//         <Stats loggedIn={this.state.userLoggedIn} /> 
//   	  </div>
//   	);
//   }
// }
export default App;