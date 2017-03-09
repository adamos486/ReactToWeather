var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      console.log(`We are querying this location: ${location}`);
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  getInitialState: function (e) {
    return {
      state: ''
    };
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" placeholder="Enter Place" ref="location"/>
        </div>
        <div>
          <button className="button expanded hollow" type="submit" value="Get Weather">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;