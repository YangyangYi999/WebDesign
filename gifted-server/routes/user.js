const express = require('express');
const router = express.Router();
const bCrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Product = require('../models/product');

router.post('/', function (req, res, next) {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bCrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User Created',
            obj: result
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bCrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});

router.patch('/cart/:id', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenicated',
                error: err
            });
        }
        User.findById(decoded.user._id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            Product.forEach(function (product) {
                if( req.params.id === product._id) {
                    user.cart.push(req.params.id);
                }
            });
            return res.status(201).json({
                message: 'Successfully added in cart',
                obj: user
            });
        });
    });
});

module.exports = router;