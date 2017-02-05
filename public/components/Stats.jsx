import App from './App.jsx';
import StatsNav from './StatsNav.jsx';
import StatsBody from './StatsBody.jsx';
import StatsFoot from './StatsFoot.jsx';
class Stats extends React.Component{
  constructor(props){
  	super(props);
  }

  // render(){
  // 	console.log('INSIDE STATS ' + this.props.data.length);
  //   this.props.data.forEach(function(value){
  //     console.log(JSON.stringify(value));
  //   });
  // 	return(
  // 	  <div>
  // 	  	<h1>Stats</h1>
  //       {this.props.data.map((value, index) => <p>{value.twitterHandle} score: {value.sentimentScore}</p>)}
  // 	  </div>
  // 	);
  // }

    render() {
      return(
        <div>
          <StatsNav />
          <StatsBody />
          <StatsFoot />
        </div>
      );
    }
}
export default Stats;