
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { title } = require('process');

const app = express();

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Handlebars engine and custom views
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get('', (req,res) => {
    res.render('index', {
        title: "Weather App",
        name: "Rishabh Goyal"
    })
})

app.get("/about", (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Rishabh Goyal"
    });
})

app.get("/help", (req, res) => {
    res.render('help', {
        helpMessage: "This is the help message",
        title: "Help",
        name: "Rishabh Goyal"
    })
})

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