require('dotenv').config();

var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const Q = "q=";
const UNITS = 'units=imperial';
const APP_ID = 'appid=' + process.env.WEATHER_APP_ID;

//create url
const BASE_URL = OPEN_WEATHER_MAP_URL + UNITS + '&' + APP_ID + '&' + Q;

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${BASE_URL + encodedLocation}`;
    return axios.get(requestUrl)
      .then(function (response) {
        if (response.data.cod && response.data.message) {
          throw new Error(response.data.message);
        } else {
          return response.data.main.temp;
        }
      })
      .catch(function (error) {
        throw new Error(error.data.message);
      });
  }
};

