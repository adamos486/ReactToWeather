var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location)
      .then(function (response) {
        that.setState({
          isLoading: false,
          location: location,
          temp: response.temp,
          name: response.name,
          errorMessage: undefined
        });
      }).catch(function (error) {
        that.setState({
          isLoading: false,
          errorMessage: error.message
        });
    });
    this.setState({
      location: location,
      temp: 23
    });
  },
  componentDidMount: function() {
    var locationQuery = this.props.location.query.location;
    if (locationQuery && locationQuery.length > 0) {
      this.handleSearch(locationQuery);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    debugger;
    var locationQuery = newProps.location.query.location;
    if (locationQuery && locationQuery.length > 0) {
      this.handleSearch(locationQuery);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;
    var name = this.state.name;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location && name) {
        return <WeatherMessage location={location} temp={temp} name={name}/>
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
