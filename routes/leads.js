import { Router } from 'express'
import * as leadsCtrl from '../controllers/leads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/leads
router.get('/', leadsCtrl.index)
// GET - localhost:3000/leads/:id
router.get('/:id', leadsCtrl.show)
// GET - localhost:3000/leads/:id/edit
router.get('/:id/edit', isLoggedIn, leadsCtrl.edit)



// POST - localhost:3000/leads
router.post('/', isLoggedIn, leadsCtrl.create)
// POST - localhost:3000/leads/:id/products
router.post('/:id/products', isLoggedIn, leadsCtrl.createProduct)

// PUT - localhost:3000/leads/:id
router.put('/:id', isLoggedIn, leadsCtrl.update)

// PATCH - localhost:3000/leads/:id/flipstatus
router.patch('/:id/flipstatus', isLoggedIn, leadsCtrl.flipStatus)

// DELETE - localhost:3000/leads/:id
router.delete('/:id', isLoggedIn, leadsCtrl.delete)

export {
    router
  }
  