'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let productSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    addedTime: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rate: {
        type: String,
    },
    itemList: [{
        size: {
            s: Number,
            m: Number,
            l: Number,
            xl: Number
        },
        color: [{
            url: String,
            type: String
        }],
        price: [{
            s: Number,
            m: Number,
            l: Number,
            xl: Number
        }]

    }]
});

productSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Product', productSchema);