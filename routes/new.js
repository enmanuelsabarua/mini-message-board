
const messagesModel = require('../models/message');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Add a new message'});
});

router.post('/', async function(req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  
  try {
    const messages = new messagesModel({text: messageText, user: messageUser});
    await messages.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
});

module.exports = router;
