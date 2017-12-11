'use strict';
const mongoose = require('mongoose'),
      Account = mongoose.model('Accounts');

let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

exports.search = function (params, callback) {
    Account.find(params, function (err, accounts) {
        throwError(err);
        callback(accounts);
    });
};

exports.save = function (account, callback) {
    let newAccount = new Account(account);
    newAccount.save(function (err, account) {
        throwError(err);
        callback(account);
    });
};

exports.get = function (accountId, callback) {
    Account.findById(accountId, function (err, account) {
        throwError(err);
        callback(account);
    });
};

exports.update = function (account, callback) {
    account.modified_date = new Date();
    Account.findOneAndUpdate({
        _id: account._id
    }, account, {
        new: true
    }, function (err, account) {
        throwError(err);
        callback(account);
    });
};

exports.delete = function (accountId, callback) {
    Account.remove({
        _id: accountId
    }, function (err, task) {
        callback();
    });
};