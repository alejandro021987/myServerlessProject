const axios = require('axios');
const config = require('../config');
module.exports = {
  async getForecast(locationNames) {
    const forecasts = [];
    const apiKey = config.apiKey;

    for (const locationName of locationNames) {
      try {
        const location = await axios.get(`${config.accuweatherUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${locationName}`);
        const locationKey = location.data[0].Key;
        const forecast = await axios.get(`${config.accuweatherUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`);
        
        //**** to test with MOCK data since hits to accuweather are limited *********/
        //const fs = require('fs');
        //const forecast = JSON.parse(fs.readFileSync('./test-data/forecast-api-response-mock.json'));
        //console.log(forecast);
        //***************************/

        forecasts.push({ locationName, dailyForecast: forecast.data.DailyForecasts });
      } catch (error) {
        console.log(error);
      }
    }
    return forecasts;
  }
}