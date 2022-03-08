import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  'sales-crm-men-app.herokuapp.com/auth/google/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/leads',
    failureRedirect: '/auth/google',
  })
)

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

export {
  router
}
