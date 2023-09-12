const moment = require('moment');
const express = require('express');
const router = express.Router();

const messages = [
  // {
  //   text: "Hi there!",
  //   user: "Amando",
  //   added: moment().format('MMMM Do YYYY, h:mm:ss a')
  // },
  // {
  //   text: "Hello World!",
  //   user: "Charles",
  //   added: moment().format('MMMM Do YYYY, h:mm:ss a')
  // }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = { router, messages};
