const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT;
const authRoute = require('./routes/authRoute')
const args = process.argv
const userName = args[2]
const pass = args[3]
const bodyParser = require('body-parser')
const userScheme = require('./schemasModels/User')


var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://" + userName + ':' + pass + "@cluster0.6ykyw.mongodb.net/Foodhub?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(makeDB())
    .then(() => app.listen(port))
    .then(console.log("connected to mongo and server listening on port " + port));

app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }))
app.use(bodyParser.json())
app.use('/auth', authRoute)

app.get('/home', (req, res) => {

    //


    res.send('hey');









})






async function makeDB() {

    await userScheme.deleteMany({})

    await userScheme.create({ firstName: "Eden", lastName: "Kaduri", email: "edenkad@gmail.com", password: "123456", Address: "dela prgule" })
    await userScheme.create({ firstName: "Eden23", lastName: "Kaduri", email: "edenkad1@gmail.com", password: "123456" })
    await userScheme.create({ firstName: "Eden234", lastName: "Kaduri", email: "edenkad123@gmail.com", password: "123456" })

    return;
}
