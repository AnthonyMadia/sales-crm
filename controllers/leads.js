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

function flipStatus(req, res) {
    Lead.findById(req.params.id)
    .then(lead => {
        lead.lead = !lead.lead
        lead.save()
        .then(() => {
            res.redirect(`/leads/${lead._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/leads")
      })
}

function edit(req, res) {
    Lead.findById(req.params.id)
    .then(lead => {
        res.render('leads/edit', {
            lead,
            title: "Edit Lead"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/leads")
      })
}

function update(req, res) {
    Lead.findById(req.params.id)
    .then(lead => {
      if (lead.owner.equals(req.user.profile._id)) {
        req.body.lead = !!req.body.lead
        lead.updateOne(req.body, {new: true})
        .then(()=> {
          res.redirect(`/leads/${req.params.id}`)
        })
      } else {
        throw new Error ('🚫 Not authorized 🚫')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/leads`)
    })
  }

export {
    index,
    create,
    show,
    flipStatus,
    edit,
    update
}