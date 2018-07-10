const request = require('request');

request({
    url: 'https://maps.google.com/maps/api/geocode/json?address=house21%road28%20banani%20model%20town%20dhaka',
    json: true
}, (error, response, body) => {
    console.log(body);
});