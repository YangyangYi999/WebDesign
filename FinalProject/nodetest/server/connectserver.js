var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://webfinal:<PASSWORD>@webfinal-shard-00-00-jtorf.mongodb.net:27017,webfinal-shard-00-01-jtorf.mongodb.net:27017,webfinal-shard-00-02-jtorf.mongodb.net:27017/test?ssl=true&replicaSet=webfinal-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  // Paste the following examples here
  db.collection('inventory').insertMany([
    // MongoDB adds the _id field with an ObjectId if _id is not present
    { item: "journal", qty: 25, status: "A",
        size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
    { item: "notebook", qty: 50, status: "A",
        size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
    { item: "paper", qty: 100, status: "D",
        size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
    { item: "planner", qty: 75, status: "D",
        size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
    { item: "postcard", qty: 45, status: "A",
        size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
 ])
 .then(function(result) {
   // process result
 })
  db.close();
});