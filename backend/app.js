const express = require('express')

const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(express())

const ProdRoute = require('./Routes/Products-routes')
const AuthRoute = require('./Routes/Auth-routes')
mongoose.connect('mongodb://localhost:27017/bartek')


app.get('/api',(req,res)=>{
    res.send("Xavy-Master API")
})


app.use('/api/auth',AuthRoute)
app.use('/api/products',ProdRoute)


app.listen(5000)
