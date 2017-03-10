var React = require('react');

var WeatherMessage = ({temp, location, name}) => {
  return (
    <div>
      <h3 className="text-center">It is {temp} in {name}.</h3>
    </div>
  )
};

module.exports = WeatherMessage;