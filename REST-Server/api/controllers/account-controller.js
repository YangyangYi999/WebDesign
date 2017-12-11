'use strict';
const accountService = require('../services/account-service');

exports.list = function (request, response) {
    accountService.search({}, function (accounts) {
        response.status(200);
        response.json(accounts);
    });
};

exports.post = function (request, response) {
    let newaccount = Object.assign({}, request.body);
    accountService.save(newaccount, function (account) {
        response.json(account);
    });
};

exports.get = function (request, response) {
    accountService.get(request.params.accountId, function(account){
        response.json(account);        
    });
};

exports.put = function (request, response) {
    let account = Object.assign({}, request.body);
    account._id = request.params.accountId;
    accountService.update(account, function (account) {
        response.json(account);
    });
};

exports.delete = function (request, response) {
    accountService.delete(request.params.accountId, function (account) {
        response.json({
            message: 'Account Successfully deleted'
        });
    });
};