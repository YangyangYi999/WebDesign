'use strict';

let express = require('express');
let router = express.Router();

let Product = require('../models/product');

router.get('/', function (req, res ,next) {
    Product.find()
        .exec(function (err, products) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: products
            });
        });
});

router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!product) {
            return res.status(500).json({
                title: 'No product found',
                error: {message: "Product not found"}
            });
        }
        res.status(200).json({
            message: 'Product Found',
            obj: result
        });
    });
});

module.exports = router;
