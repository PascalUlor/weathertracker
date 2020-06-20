const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();

// parse commandline arguements
let data = process.argv;

const getWeather = (arg) => {
  //slice out the filename from array of arguements
  let arr = arg.slice(2);

  //create date constructor
  let d = new Date();

  //get current UTC time
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  if(!arr.length) {
    return false;
  }
  arr.forEach(async (x) => {
    /**
     * Get weather and time details for locations and zipcodes using `https://openweathermap.org/current` API
     * process.env.API_KEY is parsed through environment variables `.env` file
     */
    const url =
      x !== "NaN"
        ? `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${process.env.API_KEY}`
        : `https://api.openweathermap.org/data/2.5/weather?zip=${x}&appid=${process.env.API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();

    // Get currentTime for each location
    let currentTime = new Date(utc + (data.timezone * 1000)).toLocaleString();

    if(data.weather) {
      let result = {
        weather: data.weather,
        currentTime: `${currentTime}`,
      };
      console.log(result);
    }
  });
  return true;
};

getWeather(data);


module.exports = getWeather;
