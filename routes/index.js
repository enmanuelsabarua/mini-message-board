const messagesModel = require('../models/message');
const express = require('express');
const router = express.Router();

let messages = [];

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const newMessages = await messagesModel.find({});
    messages = newMessages;
  } catch (err) {
    console.log(err);
  }
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = { router, messages};
