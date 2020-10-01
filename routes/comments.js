const router = require('express').Router()
const commentsCtrl = require('../controllers/comments')

router.get('/', commentsCtrl.index)
router.post('/', isLoggedIn, commentsCtrl.create)
router.delete('/:id', isLoggedIn, commentsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router