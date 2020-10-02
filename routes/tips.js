const router = require('express').Router()
const tipsCtrl = require('../controllers/tips')

router.get('/', tipsCtrl.index)

module.exports = router