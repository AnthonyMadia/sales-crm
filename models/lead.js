import mongoose from "mongoose"

const Schema = mongoose.Schema

const leadSchema = new Schema({
    name: String,
    email: String,
    lead: Boolean,
    Linkedin: String,
    notes: String,
    owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Lead = mongoose.model('Lead', leadSchema)

export {
    Lead
}