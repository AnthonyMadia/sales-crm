import { Router } from 'express'
import * as leadsCtrl from '../controllers/leads.js'

const router = Router()

// GET - localhost:3000/leads
router.get('/', leadsCtrl.index)

export {
    router
  }
  