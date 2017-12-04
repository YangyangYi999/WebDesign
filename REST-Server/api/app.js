'use strict';
module.exports = function(app) {
  let accountModel = require('./models/account');

  let accountdRoutes = require('./routes/account-route');
  accountRoutes(app);
};