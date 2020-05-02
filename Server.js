require('dotenv').config()
const express = require('express')
const app = express()
const swaggerUi = require("swagger-ui-express");
const paymentGatewayRouter=require('./Routes/PaymentGateway')
var port =process.env.PORT||8080;
  const swaggerDocument = require("./Swagger.js");
;
app.use(express.static(__dirname));
app.use(express.json())
app.use('/paymentGateway',paymentGatewayRouter)
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => console.log('server started'))