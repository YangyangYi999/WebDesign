'use strict';

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let Order = require('../models/order');

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenicated',
                error: err
            });
        }
        next();
    })
});

router.get('/:id', function (req, res ,next) {
    const decoded = jwt.decode(req.query.token);
    Order.findById(req.params.id, function (err, order) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!order) {
            return res.status(500).json({
                title: 'No Order found',
                error: {message: "Order not found"}
            });
        }
        if (order.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated Message',
                obj: result
            });
        });
    });
});


module.exports = router;