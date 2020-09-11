const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('chandigarh',(error, data) => {
    if(error) {
        console.log('Error ',error)
    } else {
        forecast(data.latitide, data.longitude, (forecastError, forecastData) => {
            if(error) {
                console.log('Error', forecastError);
            } else {
                console.log('Its ' + forecastData + ' degrees celcius out there in '+ data.location);
            }
        })
    }
})