import { Lead } from '../models/lead.js'


function index(req, res) {
    Lead.find({})
    .then(leads => {
        res.render('leads/index', {
            leads,
            title: "All Leads 🗣️"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/leads")
      })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
    req.body.lead = !!req.body.lead
    Lead.create(req.body)
    .then(lead => {
        res.redirect('/leads')
    })
    .catch(err => {
        console.log(err)
        res.redirect("/leads")
      })
}

export {
    index,
    create
}