var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var state = this.refs.state.value;
    console.log(`We are querying this state: ${state}`);
  },

  getInitialState: function(e) {
    return {
      state: ''
    };
  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" placeholder="Enter State" ref="state" />
        </div>
        <div>
          <button type="submit" value="Get Weather">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;