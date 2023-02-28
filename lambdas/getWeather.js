'use strict';
 const awsClient = require('../service/aws-client');
 const apiWeatherClient = require('../service/api-weather-client');

module.exports.getWeather = async (event, context, callback) => {
  const locations = await awsClient.getLocations(); // from csv
  // API weather, I used accuweather api since metawheater is down
  const locForecast = await apiWeatherClient.getForecast(locations);
  const forecast = {};
  for (const val of locForecast) {
    forecast[val.locationName] = val.dailyForecast.map(val => {
      return {
        date: val.Date.split("T")[0],
        temp: (val.Temperature.Minimum.Value + val.Temperature.Maximum.Value) / 2,
        weather: val.Day.IconPhrase
      };
    })
  };

  const response = {
      statusCode: 200,
      body: JSON.stringify({
        forecast
      }),
    };
  
  callback(null, response);

};
