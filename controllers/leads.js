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

function createLead(req, res) {
    console.log('hey')
}

export {
    index,
    createLead as create
}