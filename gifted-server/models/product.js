'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let item = mongoose.model('Item');
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
        type: Schema.Types.ObjectId, ref: 'item'
    }]
});

productSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Product', productSchema);