
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
    size: String,
    color: String,
    url: String,
    quantity: Number,
    price: Number
});

const ProductSchema = new Schema({
    name: String,
    addedTime: Date,
    description: String,
    type: String,
    rate:Number,
    items:[ItemSchema]
});

const Product = mongoose.model('product',ProductSchema);
module.exports = Product;