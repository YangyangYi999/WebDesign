'use strict';
module.exports = function(app) {
  let giftedModel = require('./models/gifted');

  let giftedRoutes = require('./routes/gifted-route');
  giftedRoutes(app);
};