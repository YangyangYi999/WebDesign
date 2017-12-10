'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let itemSchema = new Schema({
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
    },
    price: {
        type: String,
    }
});

module.exports = mongoose.model('Item', itemSchema);