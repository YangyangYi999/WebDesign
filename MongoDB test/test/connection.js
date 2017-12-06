const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://localhost/demoDB',{
        useMongoClient: true
    });
    mongoose.connection.once('open',function(){
        console.log('Connection has been made, now make fireworks...');
        done();

    }).on('error', function(error){
        console.log('Connection Error',error);
    }); 
});
    

