var request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    var url = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google server.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address');
            } else {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    });
};

geocodeAddress('House 122 Mohammadi Housing').then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (errorMsg) => {
    console.log(errorMsg);
});