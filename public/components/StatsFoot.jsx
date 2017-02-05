import App from './App.jsx';
import { Footer } from 'react-materialize';

class StatsFoot extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return(
  	  <Footer
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">Rippl</a>
        }
        links={
          <ul>
          </ul>
        }
        className='example'>
      </Footer>
  	);
  }
}

export default StatsFoot;