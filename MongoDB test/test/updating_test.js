
const assert = require('assert');
const Product = require('../models/products');

describe('Updating records',function(){

    var pro;

    beforeEach(function(done){
         pro = new Product({
            name: 'p1'
        }); 
        pro.save().then(function(){
            done();
        });
    });
   it('Updates one record in the database', function(){
    
    Product.findOneAndUpdate({name:'p1'},{name:'p2'}).then(function(done){
    Product.findOne({_id:pro._id}).then(function(result){
    assert(result.name === 'p2');
    done();
});
    });
    });
});


    