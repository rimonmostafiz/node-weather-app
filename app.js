const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if (errorMsg) {
        console.log(errorMsg);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResult) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currnetly ${weatherResult.temparatur}. It feels like ${weatherResult.apparentTemperature}.`);
            }
        });
    }
});