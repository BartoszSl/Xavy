const express = require('express')

const Product = require('../models/Product')
const Router = express.Router()



Router.get('/',async(req,res)=>{
    const p = await Product.find()
    res.json({ProductDataI:p.map(p=> p.toObject({getters:true}))})
    
})


module.exports = Router