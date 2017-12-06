
const assert = require('assert');
const Product = require('../models/products');
const Order = require('../models/orders');
const UserAccount = require('../models/userAccounts');

describe('Saving records',function(){
   it('Save a record to the database', function(done){
    var pro = new Product({
        name: 'p1',
        quantity: 22,
        price: 11.22,
        description: 'Best of all',
        type: 'T-shirt',
        rate:9
    }); 
    pro.save().then(function(){
        assert(pro.isNew === false);
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

    