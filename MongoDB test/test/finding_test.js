
const assert = require('assert');
const Product = require('../models/products');

describe('Finding records',function(){

    var pro;

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
            done();
        });
    });
   it('Finds one record from the database', function(done){
    
    Product.findOne({name:'p1'}).then(function(result){
        assert(result.name === 'p1');
        done();
    })
});
it('Finds one record by ID from the database', function(done){
    
    Product.findOne({_id: pro._id}).then(function(result){
        assert(result._id.toString() === pro._id.toString() );
        done();
    });
});
   }); 

   