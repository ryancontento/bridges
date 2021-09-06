import express from 'express'

import {
  getCapeFearBridge,
  getIsabellaHolmesBridge
} from '../controllers/bridgesController'

const router = express.Router()

router.get('/capefear', getCapeFearBridge)
router.get('/isabella', getIsabellaHolmesBridge)

export default router
