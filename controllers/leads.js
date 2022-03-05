import { Lead } from '../models/lead.js'


function index(req, res) {
    Lead.find({})
    .then(leads => {
        res.render('leads/index', {
            leads,
            title: "All Leads"
        })
    })
}

export {
    index
}