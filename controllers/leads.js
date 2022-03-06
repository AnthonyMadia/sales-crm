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

function show(req, res) {
    Lead.findById(req.params.id)
    .populate('owner')
    .then(lead => {
    console.log("🚀 ~ lead", lead);
        res.render('leads/show', {
            lead,
            title: 'Show Lead'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/leads")
      })
}

export {
    index,
    create,
    show
}