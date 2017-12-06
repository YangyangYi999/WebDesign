const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    orderDate: Date,
    productId: String,
    userId: String,
    receiverName: String,
    addressLine1: String,
    addressLine2: String,
    state:String,
    zipCode: Number

});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;