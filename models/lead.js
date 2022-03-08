import mongoose from "mongoose"
import moment from "moment"



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
    lastTouch: {
        type: Date,
        default: () => {
            moment().format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    notes: String,
    products: [productSchema],
    owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Lead = mongoose.model('Lead', leadSchema)

export {
    Lead
}
