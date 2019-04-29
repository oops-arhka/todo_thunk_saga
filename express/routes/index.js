const express = require('express');
const Todo = require('../models/todos');
const mongoose = require('mongoose');

const router = express.Router();
// route for Home-Page

router.get('/fetch', async (req, res, next) => {
  console.log('ok');
  res.send('This respond is to prove that all is working good');
});

router.post('/add', async (req, res, next) => {
  const todo = new Todo({
    text: req.body.text,
    status: req.body.status,
  })
  await todo.save();
  console.log(todo.text + 'saved');
  res.send(todo.text  + ' saved');
});

router.get('/', (req, res) => {
  res.render('index');
});

// route for user's dashboard
router.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.render('dashboard');
  } else {
    res.redirect('/users/login');
  }
});


module.exports = router;
