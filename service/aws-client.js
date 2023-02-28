const axios = require('axios');
module.exports = {
  async getLocations() {
    try {
      const locationsCsv = await axios.get('https://s3-us-west-2.amazonaws.com/valenceinterview/locations.csv');
      const lines = locationsCsv.data.split("\n");
      // The first line contains the headers
      const locations = [];
      for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",");
          // The first value is the location name
          locations.push(values[0]);
      } 
      return locations;
    } catch (error) {
      console.log(error);
    }
  }
}
