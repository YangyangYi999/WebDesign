'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    addedTime: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    itemList: {
        size: {
            s: Number,
            m: Number,
            l: Number,
            xl: Number
        },
        color: [{
            url: String,
            name: String
        }],
        price: {
            s: Number,
            m: Number,
            l: Number,
            xl: Number
        }
    }
});

productSchema.plugin(mongooseUniqueValidator);

let ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
