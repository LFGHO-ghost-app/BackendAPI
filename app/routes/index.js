const express = require('express')
const router = express.Router()
const assetsController = require('../controllers/assets')
const transactionController = require("../controllers/transaction")

router.get('/assets', assetsController.listAssets)
router.post('/assets', assetsController.create)
router.delete('/assets/:id', assetsController.delete)
router.put('/assets/:id', assetsController.put)
router.post('/assets/process-payment', transactionController.processPayment)

module.exports = router
