const request = require('request');

var url = 'https://maps.google.com/maps/api/geocode/json?address=house21%road28%20banani%20model%20town%20dhaka';

request({
    url: url,
    json: true
}, (error, response, body) => {
    console.log(body);
});