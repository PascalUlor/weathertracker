**Weather Tracker**
This is Weather Tracking console app that logs the weather and current time of the array of locations parsed through the terminal

## Getting Started
The application can be cloned from github.com.

### Prerequisites

Begin by cloning the repository, `cd` into the cloned repository and run the following:

```
npm install
```
This command installs all the necessary dependencies
Next you have to Signup on [OpenWeather](https://home.openweathermap.org/) to get the `API_KEY` you will need to get the weather information



### Setup

Create a `.env` using the `.env.example` file as a guide, using your local environment variables
run the following on the terminal

```
node src/weather.js "New York" 10005 Tokyo "São Paulo" Pluto Nigeria
```

If all goes well, you should see something similar to this on the console:
```
{
  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  currentTime: '6/20/2020, 3:41:33 PM'
}
{
  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  currentTime: '6/20/2020, 3:41:33 PM'
}
```

## Built With

* [Node.js](https://nodejs.org/) - Javascript runtime
* [OpenWeather](https://home.openweathermap.org/) - Weather API
* [Jest](https://jestjs.io/) and Supertest - testing framework

## Authors

* **Ulor Pascal** - [PascalUlor](https://github.com/PascalUlor)