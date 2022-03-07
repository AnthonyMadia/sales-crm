import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
      res.render('profiles/index', {
          profiles,
          title: 'Salespeople'
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/leads')
  })
}

export {
  index
}