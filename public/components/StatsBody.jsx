import App from './App.jsx';
import StatsCard from './StatsCard.jsx'
import { Navbar, NavItem } from 'react-materialize';

// This is the component that represents the main body of the page
class StatsBody extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <div className="statsbody">
      	{this.props.list.reverse().map((user) => <StatsCard user={user}/>) }
      </div>
  	);
  }
}

export default StatsBody;