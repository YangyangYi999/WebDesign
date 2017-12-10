'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');
let moment = require('moment');

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

let date = moment("11-23-2017", "MM-DD-YYYY");

let tShirt = new ProductModel({
    name: "PHOTO PRINT T-SHIRT",
    description: "Round neck T-shirt with short sleeves and photographic print on the chest.",
    rating: 5,
    addedTime: date,
    type: "t-shirt",
    itemList: {
        size: {
            s: 10,
            m: 10,
            l: 10,
            xl: 10
        },
        color: {
            name: "black",
            url: "https://static.zara.net/photos///2017/I/0/2/p/0679/327/250/2/w/1920/0679327250_1_1_1.jpg?ts=1511359447436"
        },
        price: {
            s: 25.90,
            m: 25.90,
            l: 25.90,
            xl: 25.90
        }
    }
});

tShirt.save(function (err, data) {
    if (err) console.log(err);
    else console.log('Saved ', data );
});

module.exports = ProductModel;
