const express = require('express')
const router = express.Router()
const assetsController = require('../controllers/assets')

router.get('/assets', assetsController.listAssets)
router.post('/assets', assetsController.create)
router.delete('/assets/:id', assetsController.delete)
router.put('/assets/:id', assetsController.put)

module.exports = router
