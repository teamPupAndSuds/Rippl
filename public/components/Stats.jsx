import App from './App.jsx';

class Stats extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
  	  loggedIn: this.props.loggedIn
  	}
  }

  componentDidMount(){
  	this.setState({
  	  loggedIn: this.props.loggedIn
  	})
  }

  render(){
  	console.log('INSIDE STATS ' + this.props.loggedIn)
  	return(
  	  <div>
  	  	<h1>Stats</h1>
  	    <div>{this.props.loggedIn ? <div>Welcome back!</div> : <div>Please login to continue</div>}</div>
  	  </div>
  	);
  }
}
export default Stats;