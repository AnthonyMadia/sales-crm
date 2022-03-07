import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: String,
  
})

const Product = mongoose.model('Product', productSchema)

export {
  Product
}
