import { Router } from 'express'
import * as leadsCtrl from '../controllers/leads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/leads
router.get('/', leadsCtrl.index)
// GET - localhost:3000/leads/:id
router.get('/:id', leadsCtrl.show)
// GET - localhost:3000/leads/:id/edit
router.get('/leads/:id/edit', isLoggedIn, leadsCtrl.edit)

// POST - localhost:3000/leads
router.post('/', isLoggedIn, leadsCtrl.create)

// PATCH - localhost:3000/leads/:id/flipstatus
router.patch('/:id/flipstatus', isLoggedIn, leadsCtrl.flipStatus)

export {
    router
  }
  