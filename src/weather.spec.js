const getWeather = require('./weather');

let input = ["node", "src/weather.js", "New York", "10005", "Tokyo" ,"São Paulo", "Pluto", "Nigeria"]

describe('getweather function', () => {
    it('should return true if locations or zipcode are inputed', ()=>{
       let expected = getWeather(input);
       expect(expected).toBe(true);
    })
})