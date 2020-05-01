require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const paymentGatewayRouter=require('./Routes/PaymentGateway')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())
app.use('/paymentGateway',paymentGatewayRouter)
app.listen(3000, () => console.log('server started'))