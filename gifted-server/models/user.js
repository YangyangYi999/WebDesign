'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let order = mongoose.model('Order');
let mongooseUniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    orderList: [{
        orderID: {
            type: Schema.Types.ObjectId,
            ref: 'order'
        }
    }]
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
