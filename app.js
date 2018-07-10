const request = require('request');

request({
    url: 'https://maps.google.com/maps/api/geocode/json?address=mohammdi%20housing%20ltd%20mohammadpur%20dhaka',
    json: true
}, (error, response, body) => {
    console.log(body);
});