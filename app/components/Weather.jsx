var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'San Francisco',
      temp: 55
    }
  },
  handleSearch: function(location) {
    //TODO: Convert location to weather temp
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function () {
    var location = this.state.location;
    var temp = this.state.temp;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp} />
      </div>
    );
  }
});

module.exports = Weather;