const router = require('express').Router()
const apiCtrl = require('../controllers/api')


router.post('/', apiCtrl.search)
router.get('/search', apiCtrl.index)
router.post('/address', apiCtrl.address)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router