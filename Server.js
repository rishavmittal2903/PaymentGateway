require('dotenv').config()
const express = require('express')
const app = express()
const paymentGatewayRouter=require('./Routes/PaymentGateway')
var port =process.env.PORT||8080;
app.use(express.static(__dirname));
app.use(express.json())
app.use('/paymentGateway',paymentGatewayRouter)
app.listen(port, () => console.log('server started'))