var React = require('react');

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;
  return (
    <div>
      <h3>It is {temp} in {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;