import App from './App.jsx';
import StatsBox from './StatsBox.jsx'
import { Col, Card } from 'react-materialize';


// This is the component that represents the cards holding data on each user
class StatsCard extends React.Component{
  constructor(props){
  	super(props),
    this.getScoreColor = this.getScoreColor.bind(this)
  }

  getScoreColor(){
    console.log('this is the score ' +  this.props.user.sentimentScore * 1000);
    if(this.props.user.sentimentScore * 1000 > 100){
      return 'green';
    } else {
      return 'red';
    }
  }

  componentDidMount(){
    this.getScoreColor()
  }

  render(){
  	return (
      <Col m={6} s={12}>
    		<Card className='blue-grey darken-1 white-text' textClassName='white-text' title={this.props.user.twitterHandle} actions={[<a href={'http://twitter.com/' + this.props.user.twitterHandle}>To Twitter</a>]}>
    			<StatsBox score={this.props.user.sentimentScore} color={this.getScoreColor()}/>
    		</Card>
			</Col>
  	);
  }
}

export default StatsCard;