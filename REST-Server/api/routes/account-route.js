'use strict'
module.exports = function (app) {
    const accountController = require('../controllers/account-controller');

    app.route('/accounts')
        .get(accountController.list)
        .post(accountController.post);

    app.route('/accounts/:accountId')
        .get(accountController.get)
        .put(accountController.put)
        .delete(accountController.delete);
};