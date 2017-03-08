var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'San Francisco',
      temp: 55
    }
  },
  handleSearch: function (location) {
    var that = this;
    //TODO: Convert location to weather temp
    openWeatherMap.getTemp(location)
      .then(function (temp) {
        that.setState({
          location: location,
          temp: temp
        });
      }).catch(function (error) {
        alert(error);
    });
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
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;