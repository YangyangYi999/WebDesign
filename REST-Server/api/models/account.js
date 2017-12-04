'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    username:{
        type: String,
        required: "username is required"
    },

    password:{
        type: String,
        required: "password is required"
    },

    email:{
        type: String,
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Accounts', AccountSchema);