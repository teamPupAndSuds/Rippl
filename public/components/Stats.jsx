import App from './App.jsx';
import StatsNav from './StatsNav.jsx';
import StatsBody from './StatsBody.jsx';
import StatsFoot from './StatsFoot.jsx';
import StatSpinner from './StatSpinner.jsx'
class Stats extends React.Component{
  constructor(props){
  	super(props);

    this.state = {
      query: '',
      list: [],
      spinner: false
    }


    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.queryUser = this.queryUser.bind(this);
  }

  getData(){
    console.log('getting DATA');
    var that = this;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/rippl/user/RipplMaster',
      dataType: 'json',
      success: function(data){
        console.log('success! ' + {data});
        that.setState({list: data.reverse(), spinner: false});
      },
      error: function(err){
        console.log(err);
        console.log('didnt work');
      }
    });
  }

  handleChange(event){
    this.setState({query: event.target.value});
  }

  queryUser(){
    this.setState({spinner: true});
    console.log('querying USER')
    var that = this;
    var query = {
      handle: this.state.query
    };
    this.setState({query: ''});
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/analyze',
      dataType: 'json',
      data: query,
      success: function(data){
        that.getData();
        console.log('success! ' + {data});
      },
      error: function(err){
        console.log(err);
        console.log('didnt work');
      }
    });
  }

    render() {
      return(
        <div>
          <StatsNav spinner={this.state.spinner} formVal={this.state.query} getUserClick={this.queryUser} formChange={this.handleChange}/>
          <StatsBody list={this.state.list}/>
          <StatsFoot />
        </div>
      );
    }
}
export default Stats;