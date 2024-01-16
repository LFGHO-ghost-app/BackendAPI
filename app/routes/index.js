const express = require('express')
const router = express.Router()
const assetsController = require('../controllers/assets')

router.get('/assets', assetsController.listAssets)

module.exports = router
