
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

    if(!req.query.address) {
        return res.send({
            error: "Address must be provided in query params"
        })
    }

    res.send({
        location: req.query.address,
        forecast: "Sunny",
        temperature: 31,
        title: "Weather",
        name: "Rishabh Goyal"
    })
})

app.get("/products", (req, res) => {
    
    if(!req.query.search) {
        return res.send({
            error: "Search parameter must be provided!"
        })
    }

    console.log(req.query);
    res.send({
        products: []
    })
})

app.get("/help/*", (req, res) => {
    res.render('404', {
        title: "404",
        name: "Rishabh Goyal",
        errorMessage: "Help article not found"
    })
})

app.get("*", (req, res) => {
    res.render('404', {
        title: "404",
        name: "Rishabh Goyal",
        errorMessage: "Page not found"
    })
})

app.listen(3000, () => {
    console.log('Server is up at 3000 port')
})