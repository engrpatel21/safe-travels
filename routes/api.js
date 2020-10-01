const router = require('express').Router()
const apiCtrl = require('../controllers/api')

router.get('/', apiCtrl.search)
router.get('/search', apiCtrl.index)



module.exports = router