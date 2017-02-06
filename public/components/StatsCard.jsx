import App from './App.jsx';
import StatsBox from './StatsBox.jsx'
import { Col, Card } from 'react-materialize';


// This is the component that represents the cards holding data on each user
class StatsCard extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <Col m={6} s={12}>
    		<Card className='blue-grey darken-1 white-text' textClassName='white-text' title={this.props.user.twitterHandle} actions={[<a href={'http://twitter.com/' + this.props.user.twitterHandle}>To Twitter</a>]}>
    			<StatsBox score={this.props.user.sentimentScore}/>
    		</Card>
			</Col>
  	);
  }
}

export default StatsCard;