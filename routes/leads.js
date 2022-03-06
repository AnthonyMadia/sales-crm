import { Router } from 'express'
import * as leadsCtrl from '../controllers/leads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/leads
router.get('/', leadsCtrl.index)

// POST - localhost:3000/leads
router.post('/', isLoggedIn, leadsCtrl.create)

export {
    router
  }
  