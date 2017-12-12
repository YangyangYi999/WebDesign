'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');
let Prod = require('./product');

let orderSchema = new Schema({
    orderID: {type: String, required: true, unique: true},
    productList: [{
        size: String,
        qty: Number,
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    user: {type: Schema.Types.ObjectId, ref:'User'},
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

orderSchema.post('put', function (order) {
    Prod.find({}, function (err, products) {
        products.forEach(function (product) {
            order.productList.forEach(function (p) {
                if (p.product._id === product._id) {
                    switch (p.size.toLowerCase()) {
                        case 's':
                            product.itemList.size.s = product.itemList.size.s - p.qty;
                            product.save();
                            break;
                        case 'm':
                            product.itemList.size.m = product.itemList.size.m - p.qty;
                            product.save();
                            break;
                        case 'l':
                            product.itemList.size.l = product.itemList.size.l - p.qty;
                            product.save();
                            break;
                        case 'xl':
                            product.itemList.size.xl = product.itemList.size.xl - p.qty;
                            product.save();
                            break;
                    }
                }
            });
        });
    });
});


module.exports = mongoose.model('Order', orderSchema);
