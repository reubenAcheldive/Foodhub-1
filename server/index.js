const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT;
const indexRoute = require('./routes/indexRoute')


app.use('/', indexRoute)




app.get('/home', (req, res) => {

    //


    res.send('hey');









})

app.listen(port, () => {
    console.log(`Connected to server and listening on port ${port}...`);
});






