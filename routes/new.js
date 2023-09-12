const express = require('express');
const router = express.Router();
const { messages } = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Add a new message'});
});

router.post('/', function(req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
