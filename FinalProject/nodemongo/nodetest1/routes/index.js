var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld',function(req,res){
  res.render('helloworld',{title:'hello,yidi mongo'})
});

/*get Userlist page. */
router.get('/userlist',function(req,res){
  var db =req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
  res.render('userlist',{"userlist":docs});
  
  });
  });

/*Get new user page*/
router.get('/newuser',function(req,res){
res.render('newuser',{title:'add new user'});
});

/*POST to Add user service*/
router.post('/adduser',function(req,res){
//ser out internal DB variable
var db = req.db;

//Get our own values, these rely on the "name" attributes

var userName = req.body.username;
var userEmail = req.body.useremail;

//set our colleciton

var collection = db.get('usercollection');

//Submit to the DB
collection.insert({
  "username":userName,
  "email":userEmail
},function(err,doc){
if(err){
  //if failed, return error
  res.send("fail to add informatino to the Database");
}
else{
//if it workd, set the header to the adress bar 
res.location("userlist");
//and forward to success page
res.redirect("userlist");

}
});


});

module.exports = router;

