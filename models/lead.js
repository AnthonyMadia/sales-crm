import mongoose from "mongoose"

const Schema = mongoose.Schema

const leadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    email: String,
    lead: {
        type: Boolean,
        required: true
    },
    linkedin: String,
    lastTouch: Date,
    notes: String,
    owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Lead = mongoose.model('Lead', leadSchema)

export {
    Lead
}

// Fix error handling when user does not type in name or lead status