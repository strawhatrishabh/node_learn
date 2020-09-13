const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('Express help!')
})

app.get('/about', (req, res) => {
    res.send('Express about!')
})

app.get('/weather', (req, res) => {
    res.send("Today's Weather!")
})

app.listen(3000, () => {
    console.log('Server is up at 3000 port')
})