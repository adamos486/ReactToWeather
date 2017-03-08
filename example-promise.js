//http://samples.openweathermap.org/data/2.5/find?q=London&units=imperial
require('dotenv-webpack').config();

var baseUrl = 'http://samples.openweathermap.org/data/2.5/find?q=';
var query = '';
var units = 'units=imperial';
var appId = 'appid=' + process.env.WEATHER_APP_ID;

function getTempCallback(location, callback) {
  query = location;
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('San Francisco', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('San Francisco').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

//Challenge area
//Add Promise
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Only numbers can be added!');
    }
  });
}

function resolveAdd(sum) {
  console.log('add success: ' + sum);
}

function rejectAdd(err) {
  console.log('add error: ' + err);
}

// addPromise(3, 2).then(function (sum) {
//   console.log('add success: ' + sum);
// }, function (err) {
//   console.log('add error: ' + err);
// });
//
// addPromise(3, "five").then(function (sum) {
//   console.log('add success: ' + sum);
// }, function (err) {
//   console.log('add error: ' + err);
// });

addPromise(3, 2).then(resolveAdd, rejectAdd);
addPromise(3, "five").then(resolveAdd, rejectAdd);