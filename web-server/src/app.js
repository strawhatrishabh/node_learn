
const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public/');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        location: "Chandigarh",
        forecast: "Sunny",
        temperature: 31
    })
})

app.listen(3000, () => {
    console.log('Server is up at 3000 port')
})