const User = require('../models/user');

module.exports = {
  index,
  login,
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('index', { user: req.user, users})
  })
}

function login(req, res){
  User.find({})
  .then(users => {
    res.render('users/index', {user: req.user, users})
  })
}