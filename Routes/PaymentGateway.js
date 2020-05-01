const express = require('express')
const router = express.Router()
var Insta = require('instamojo-nodejs');
const url=require('url');
require('dotenv').config()
Insta.setKeys(process.env.API_KEY, process.env.AUTH_KEY);
console.log(process.env.API_KEY,process.env.AUTH_KEY)
// if(process.env.DEV)
// {
//   Insta.isSandboxMode(true);
// }
//Create payment for user
router.post('/createPayment', (req, res) => {
    var data = new Insta.PaymentData();
     
    data.purpose = req.body.purpose;            
    data.amount = req.body.amount;  
    data.phone=req.body.phone;
    data.email=req.body.email;
    data.buyer_name=req.body.buyer_name;                
    data.setRedirectUrl(process.env.REDIRECT_URL);
    Insta.createPayment(data, function(error, response) {
        if (error) {
          res.send(error);
          console.log("error=------"+error)
    
        } else {
          // Payment redirection link at response.payment_request.longurl
          console.log(JSON.parse(response));
          if(JSON.parse(response).success)
          {
            res.send(JSON.parse(response).payment_request.longurl);
          }
          else
          {
            res.send(JSON.parse(response));
          }
        }
      });
    })

//Get payment status as per payment request id
router.get('/getPaymentStatus/:paymentRequestId', (req, res) => {
    Insta.getPaymentRequestStatus(req.params.paymentRequestId, function(error, response) {
        if (error) {
          res.send(error);
        } else {
          res.send(response);
        }
      });
})

//Get payment detail as per payment request id and payment id
router.get('/getPaymentDetails/:paymentRequestId/:paymentId', (req, res) => {
    Insta.getPaymentDetails(req.params.paymentRequestId,req.params.paymentId, function(error, response) {
        if (error) {
          res.send(error);
        } else {
          res.send(response);
        }
      });
})

// Initiate refund for specific request id
router.post('/refund', (req, res) => {
var refund = new Insta.RefundRequest();
refund.payment_id = req.body.payment_id;
refund.type       = req.body.type;     // Available : ['RFD', 'TNR', 'QFL', 'QNR', 'EWN', 'TAN', 'PTH']
refund.body       = req.body.reason;     // Reason for refund
refund.setRefundAmount(req.body.amount);  // Optional, if you want to refund partial amount
Insta.createRefund(refund, function(error, response) {
    if (error) {
        res.send(error);
      } else {
        res.send(response);
      }
});
})

//Get Refund Status as per refund id
router.get('/getRefundStatus/:refundId', (req, res) => {
    Insta.getRefundDetails(req.params.refundId, function(error, response) {
        if (error) {
            res.send(error);
          } else {
            res.send(response);
          }
      });
})

//Redirection after payment creation
router.get('/callback', (req, res) => {
    let url_parts=url.parse(req.url,true),
    responseData=url_parts.query;
     res.send(responseData);
 })
module.exports = router