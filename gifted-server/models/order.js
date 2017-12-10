'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let orderSchema = new Schema({
    orderID: {type: String, required: true, unique: true},
    productList: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    // user: {type: Schema.Types.ObjectId, ref:'User'},
    orderDate: {
        type: String,
        required: true
    },
    userAccountID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    }
});

orderSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Order', orderSchema);
