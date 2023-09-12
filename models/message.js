const moment = require('moment');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    text: { type: String, require: true },
    user: { type: String, require: true },
    added: { type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a') }
});

module.exports = mongoose.model('Message', MessageSchema);