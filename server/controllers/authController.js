const userScheme = require('../schemasModels/User')
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const sendError = () => {

}


const register = async (req, res) => {
    console.log("register func");

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userPassword = req.body.password;

    if (email == null || userPassword == null || firstName == null || lastName == null) {
        res.status(400).send({ 'status': 'fail' })
    }

    try {
        const exists = await userScheme.findOne({ "email": email })
        if (exists != null) {
            return res.status(400).send({ 'status': 'user exists' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userPassword, salt)
        const user = new userScheme({
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'password': hashedPassword
        })
        console.log('user saved');
        newUser = await user.save()
        res.status(200).send('success')

    } catch (err) {
        return res.status(400).send({ 'status': 'error was thrown' })
    }
}


const login = async (req, res) => {
    console.log('login func');

    const email = req.body.email;
    const password = req.body.password;

    if (email == null || password == null) {
        res.status(400).send({ 'status': 'email or password are empty' })
        console.log('email or password empty');
    }

    try {
        const user = await userScheme.findOne({ "email": email })
        if (user == null) {
            res.status(400).send({ 'status': 'user not found' })
            console.log('user not exist');
            return;
        }
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.status(400).send('password does not match')
            console.log('problem with decryption');
        }

        user.isConnected = true;
        user.save();
        console.log('user successfully connected');
        res.status(200).send('user managed to login')
    } catch (err) {
        return res.status(400).send({ 'status': 'error was thrown' + err })
    }
}


module.exports = { register, login }