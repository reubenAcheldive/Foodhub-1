const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        max: 15
    },
    lastName: {
        type: String,
        required: true,
        max: 15
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,

    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    dateOfRegistration: {
        type: Date,
    },
    Address: {
        type: String,
        required: true
    },
    Followers: {
        type: Array,
        default: []
    },
    Following: {
        type: Array,
        default: []
    },
    Reviews: {
        type: Array,
        default: []
    },
    Recipes: {
        type: Array,
        default: []
    },
    isConnected: {
        type: Boolean
    },
    profilePicture: {
        type: String,
        default: " "
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model('User', userSchema);
