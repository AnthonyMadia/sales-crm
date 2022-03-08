import mongoose from "mongoose"

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {type: String},
    price: {type: Number, min: 0}
})

const leadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    email: String,
    lead: {
        type: Boolean,
        required: true
    },
    linkedin: String,
    lastTouch: Date,
    notes: String,
    products: [productSchema],
    owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Lead = mongoose.model('Lead', leadSchema)

export {
    Lead
}

// Fix error handling when user does not type in name or lead status