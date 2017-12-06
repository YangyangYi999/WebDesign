
const assert = require('assert');
const Product = require('../models/products');
const Order = require('../models/orders');
const UserAccount = require('../models/userAccounts');

describe('Deleting records',function(){

    var pro;
    var ord;
    var ua;

    beforeEach(function(done){
         pro = new Product({
            name: 'p1',
            quantity: 22,
            price: 11.22,
            description: 'Best of all',
            type: 'T-shirt',
            rate:9
        }); 
        pro.save().then(function(){
        });

         ua = new UserAccount({
            username:'asdn',
            password:123213,
            email: 'asdd@gmail.com'
        }); 
        ua.save().then(function(){
        }); 

        ord = new Order({
            orderDate: 2017/02/23,
            receiverName: 'Ada',
            addressLine1: '232 Main St',
            addressLine2: 'apt 2',
            state:'ma',
            zipCode: 02311
        }); 
        ord.save().then(function(){
            done();
        });
    });
   it('Deletes one record from the database', function(){
    
    Product.findOneAndRemove({name:'p1'}).then(function(done){
    Product.findOne({name:'p1'}).then(function(result){
    assert(result === null);
});
    });

    Order.findOneAndRemove({receiverName:'Ada'}).then(function(done){
        Order.findOne({receiverName:'Ada'}).then(function(result){
        assert(result === null);
        done();
    });
        });

        UserAccount.findOneAndRemove({username:'asdn'}).then(function(done){
            Order.findOne({username:'asdn'}).then(function(result){
            assert(result === null);
            done();
        });
            });
    });
});


    