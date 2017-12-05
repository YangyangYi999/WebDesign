'user strict';

const mongoose = require('mongoose'),
Product = mongoose.model('Products'),
productService = require('../services/product-service');

exports.list = function(req,res){
productService.search({},function(products){
    res.json(products);
});
};

exports.post = function(req,res){
    let newProduct = Object.assign({},req.body);
    productService.save(newProduct,function (product){
        res.json(product);
    });
};

exports.get = function(req,res){
    productService.get(req.params.productId, function(product){
        res.json(product);
    });
};

exports.put = function(req, res){
    let product = Object.assign({},req.body);
    product._id = req.params.productId;
    productService.update(product,function(product){
        res.json(product);
    });
};

exports.delete = function(req,res){
    productService.delete(req.params.productId, function(product){
        res.json({
            message: 'Product deleted successfully!'
        });
    });
};