var connect = require('connect'),
    serveStatic = require('serve-static'),
    PORT = 3000;
connect().use(serveStatic(__dirname)).listen(PORT, function () {
    console.log('Server running on ' + PORT + '...');
});