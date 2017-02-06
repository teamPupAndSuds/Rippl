import App from './App.jsx';
import { Preloader, Col } from 'react-materialize';

// This is the component that represents the main body of the page
class StatSpinner extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <div className='spinner'>
        <Preloader flashing size='small'/>
      </div>
  	);
  }
}

export default StatSpinner;