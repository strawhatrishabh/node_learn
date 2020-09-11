const request = require('request')
const geocode = require('./utils/geocode.js')

// const url = 'http://api.weatherstack.com/current?access_key=c57dac95c3df145905239ad48eb5a476&query=40.714,-74.006'
const weatherBaseUrl = 'http://api.weatherstack.com/'
const weatherApiKey = 'c57dac95c3df145905239ad48eb5a476'
var position = {
    latitude: 40.714,
    longitude: -74.006
}
var weatherUrl = weatherBaseUrl + 'current?access_key=' + weatherApiKey + '&query=' + position.latitude + ',' + position.longitude;

geocode('chandigarh',(error, data) => {
    console.log(error);
    console.log(data);
})

// request({ url: weatherUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body)   
//     }
// })

// request({ url: geocodeUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         position.latitude = response.body.features[0].center[1]
//         position.longitude = response.body.features[0].center[0]
//         console.log(position)
//     }
// })