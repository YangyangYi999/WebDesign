let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/accountDB', { userMongoClient: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Accounts RESTful API server started on: ' + port);