const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    id : String,
    colors: [],
    img: String,
    category: String,
    title: String,
    short_name: String,
    price: Number,
    author: String,
    reviews:[],
    sizes:[],
    quantity: Number,
    discount: { is: Boolean , percent: Number || null}
})

module.exports= mongoose.model('products',ProductSchema)