const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send('hello world');
})


app.get('/home', (req, res) => {

    //


    res.send('wow')









})

app.listen(port, () => {
    console.log(`Connected to server and listening on port ${port}...`);
});






