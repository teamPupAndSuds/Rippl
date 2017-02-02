import AuthService from './utils/AuthService.jsx';
import Api from './utils/Api.jsx';
import Stats from './Stats.jsx';

class App extends React.Component{
  constructor(){
  	super();

    this.state = {
      stats: false
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

  // loads the stat page
  loadStats() {
    this.setState({stats: true});
  }
  render(){
    if (this.state.stats) {
      return (
        <Stats />
      );
    }
  	return(
  	  <div>
  	    <button onClick={this.doLogin}>Login</button>
        <button onClick={this.loadStats.bind(this)}>Stats</button>
      </div>
  	);
  }
}
export default App;