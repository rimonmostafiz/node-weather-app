const request = require('request');

var getWeather = (lat, lng, callBack) => {
    request({
        url: `https://api.darksky.net/forecast/88e66a1327f3b700c9ba46badac812f7/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callBack(undefined, {
                temparatur: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callBack('Unable of fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;