import App from './App.jsx';
import StatSpinner from './StatSpinner.jsx'
import { Col, Row, Card, CardPanel } from 'react-materialize';


// This is the component that represents the cards holding data on each user
class StatsCard extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <div className="statsbox">
        <Row>
          <Col s={3} m={3} l={3}>
            SCORE: {this.props.score ? Math.floor(this.props.score * 1000) : <StatSpinner />}
          </Col>
          <Col s={1} m={1} l={1}>
            
          </Col>
        </Row>
      </div>
  	);
  }
}

export default StatsCard;