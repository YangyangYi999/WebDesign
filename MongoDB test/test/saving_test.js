
const assert = require('assert');
const mongoose = require('mongoose');
const Product = require('../models/products');
const Order = require('../models/orders');
const UserAccount = require('../models/userAccounts');

describe('Saving records',function(){
   it('Save a record to the database', function(done){
    
    var pro = new Product({
        name: 'p12',
        addTime: 2/8/2016,
        description: 'Favourate',
        type: 'Women/Dress',
        rate: 5,
        items:[{size:'S', color: 'purple', url:'https://www.google.com/search?biw=1440&bih=803&tbm=isch&sa=1&ei=Hh4sWoCmFZvijwTylpagBg&q=dress&oq=dress&gs_l=psy-ab.3..0i67k1l2j0l2j0i67k1j0j0i67k1l2j0l2.394972.399935.0.400400.10.9.0.1.1.0.115.775.7j1.9.0....0...1c.1.64.psy-ab..0.9.780.0...75.8MehMZAh_60#imgrc=FXMn3osrimgy7M:', quantity: 80,  price:70.9}, {size:'M', color: 'purple', url:'https://www.google.com/search?biw=1440&bih=803&tbm=isch&sa=1&ei=Hh4sWoCmFZvijwTylpagBg&q=dress&oq=dress&gs_l=psy-ab.3..0i67k1l2j0l2j0i67k1j0j0i67k1l2j0l2.394972.399935.0.400400.10.9.0.1.1.0.115.775.7j1.9.0....0...1c.1.64.psy-ab..0.9.780.0...75.8MehMZAh_60#imgrc=FXMn3osrimgy7M:', quantity: 70,  price: 70.9}, {size:'L', color: 'purple', url:'https://www.google.com/search?biw=1440&bih=803&tbm=isch&sa=1&ei=Hh4sWoCmFZvijwTylpagBg&q=dress&oq=dress&gs_l=psy-ab.3..0i67k1l2j0l2j0i67k1j0j0i67k1l2j0l2.394972.399935.0.400400.10.9.0.1.1.0.115.775.7j1.9.0....0...1c.1.64.psy-ab..0.9.780.0...75.8MehMZAh_60#imgrc=FXMn3osrimgy7M:',  quantity: 90,  price: 70.9}]
    }); 
    pro.save().then(function(){
        Product.findOne({name:'p12'}).then(function(record){
        assert(record.items.length === 3);
        done();
        });
    });

    var ua = new UserAccount({
        username:'asdn',
        password:123213,
        email: 'asdd@gmail.com'
    }); 
    ua.save().then(function(){
        assert(ua.isNew === false);
    });

    var ord = new Order({
        orderDate: 2017/02/23,
        receiverName: 'Ada',
        addressLine1: '232 Main St',
        addressLine2: 'apt 2',
        state:'ma',
        zipCode: 02311
    }); 
    ord.save().then(function(){
        assert(ord.isNew === false);
        done();
    });
});
   }); 

    