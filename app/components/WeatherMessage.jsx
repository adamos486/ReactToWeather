var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h3>It is 51 in San Francisco</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;