var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    //TODO: Convert location to weather temp
    openWeatherMap.getTemp(location)
      .then(function (temp) {
        that.setState({
          isLoading: false,
          location: location,
          temp: temp
        });
      }).catch(function (error) {
        alert(error);
        that.setState({
          isLoading: false
        });
    });
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function () {
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;