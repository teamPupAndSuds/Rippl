import AuthService from './utils/AuthService.jsx';
import Api from './utils/Api.jsx';

class App extends React.Component{
  componentDidMount(){
    this.setState({
      userLoggedIn: this.api.isLoggedIn()
    })
  }
  constructor(){
  	super();
    this.state = {
      userLoggedIn: false
    }
    //creates a new instance of AuthService
    this.api = new Api();
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin(){
    console.log('in button');
    this.api.login.bind(this);
    this.api.login();
  }

  render(){
  	return(
  	  <div>
  	    <button onClick={this.doLogin}>Login</button>
  	  </div>
  	);
  }
}
export default App;