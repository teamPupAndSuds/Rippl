import App from './App.jsx';
import { Navbar, NavItem } from 'react-materialize';
// This is the component that represents the navbar
class StatsNav extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return(
  	  <Navbar right>
        <NavItem href='/'>
          <img src="../img/rippl-sml.png" className="brand-logo right ripplnav"/>
        </NavItem>
        <NavItem href='#'>Logout</NavItem>
      </Navbar>
  	);
  }
}

export default StatsNav;