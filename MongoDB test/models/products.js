const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    quantity: Number,
    price: Number,
    description: String,
    type: String,
    rate:Number  
});

const Product = mongoose.model('product',ProductSchema);
module.exports = Product;