const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserAccountSchema = new Schema({
    username: String,
    password: Number,
    email: String

});

const UserAccount = mongoose.model('userAccount',UserAccountSchema);
module.exports = UserAccount;