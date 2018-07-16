# Weather App
A node js application to fetch weather data from online
Weather App is a command line app build using node js.

There are two files `app.js` and `app-promise.js`. Both can be used to fetch weather data.
* `app.js` - Uses npm `request` library and javascript callback function
* `app-promise.js` - Use npm `axios` library and javascript promises

### Getting Started

#### Prerequisites Library
- node js: 10.6.0
- axios: 0.18.0
- request: 2.87.0
- yargs: 4.8.1

#### Installing
```
npm install
```
Run the above command to install all the prerequisites libraries

#### Commands
```
node app.js --help
node app-promise.js --help
```
run the `help` commands to see which parameters the app expects from the terminal

##### Example
  * **address:** fetch weather data for an address
    * `node app.js -a 'some address/your location'`
        * `node app.js -a 'Dhaka Bangladesh'`
    * `node app-promise.js add -a 'some address/your location'`
        * `node app.js -a 'New York'`
#### API's
This app uses two API
* Google Location (Location API)
* Dark Sky (Weather API)

**_I'm using trial account of Dark Sky API, Which allows up to 1,000 free calls per day._**


### Author
- **Rimon Mostafiz**

### License
This project is licensed under the MIT License