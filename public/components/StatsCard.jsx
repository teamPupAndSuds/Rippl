import App from './App.jsx';
import { Col, Card } from 'react-materialize';


// This is the component that represents the cards holding data on each user
class StatsCard extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <Col m={6} s={12}>
    		<Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    			I am a very simple card.
    		</Card>
			</Col>
  	);
  }
}

export default StatsCard;