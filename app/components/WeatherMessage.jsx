var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <div>
        <h3>It is {temp} in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;