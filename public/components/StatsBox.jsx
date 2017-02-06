import StatSpinner from './StatSpinner.jsx'
import { Col, Row, Card, CardPanel } from 'react-materialize';


// This is the component that represents the box that displays the data
class StatsCard extends React.Component{
  constructor(props){
  	super(props);
  }

  render(){
  	return (
      <div className="statsbox">
        <Row>
          <Col s={3} m={3} l={3}>
            <p id="scoreColor" style={{color:this.props.color}}>Rippl Score: {this.props.score ? Math.floor(this.props.score * 1000) : 'Calculating...'}</p>
          </Col>
        </Row>
      </div>
  	);
  }
}

export default StatsCard;