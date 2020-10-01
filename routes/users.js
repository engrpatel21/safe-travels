var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/login', usersCtrl.login)

module.exports = router;
