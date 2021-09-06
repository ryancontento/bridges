const express = require('express')

const {
  getCapeFearBridge,
  getIsabellaHolmesBridge
} = require('../controllers/bridgesController')

const router = express.Router()

router.get('/capefear', getCapeFearBridge)
router.get('/isabella', getIsabellaHolmesBridge)

module.exports = router
