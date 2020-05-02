This project was bootstrapped with [PaymentGateway](https://paymentgatewayapp.herokuapp.com/).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `http://localhost:8080`

Swagger documentation will open to use all payment api's

### `http://localhost:8080/paymentGateway/createPayment`

Api to create payment link and return the payment url to make payment from different mode (Credit Card, Debit Card, Net Banking, PhonePe, GooglePay, Bhim UPI, Paytm) with accepting following parameters
Method Type: Post
Content-Type:Application/json
Parameters:{
	"purpose":"xxxx",
	"amount":xx,
	"phone":"xxxxxxxxxx",
	"email":"xxxx@xxx.com",
	"buyer_name":"xxxxxxx",
	"redirecturl":"test/xxxxxx/xxxx"
	
}


### `http://localhost:8080/paymentGateway/getPaymentStatus`

Api to fetch the payment status with accepting following parameters
Method Type: Get
Content-Type:Application/json
In:Query
Parameters:{
	"paymentRequestId":"xxxx"
}
Calling-method:http://localhost:8080/paymentGateway/getPaymentStatus/xxxxx


### `http://localhost:8080/paymentGateway/getPaymentDetails`

Api to fetch the payment details with accepting following parameters
Method Type: Get
Content-Type:Application/json
In:Query
Parameters:{
	"paymentRequestId":"xxxx",
    "paymentId":"xxxx"
}
Calling-method:http://localhost:8080/paymentGateway/getPaymentDetails/xxxxx/xxxxxx

### `http://localhost:8080/paymentGateway/refund`

Api to initiate the refund amount to user account as per the specfic reason with accepting following parameters
Method Type: Post
Content-Type:Application/json
In:Query
Parameters:{
	"payment_id":"xxxxxxx",
	"type":"RFD",
	"reason":"xxxxx"
}
Type in ['RFD', 'TNR', 'QFL', 'QNR', 'EWN', 'TAN', 'PTH']

### `http://localhost:8080/paymentGateway/getRefundStatus`

Api to fetch the refund status with accepting following parameters
Method Type: Get
Content-Type:Application/json
In:Query
Parameters:{
	"refundId":"xxxx"
}
Calling-method:http://localhost:8080/paymentGateway/getRefundStatus/xxxxx

### `http://localhost:8080/paymentGateway/callback`

Api which called once payment link got generated. Treat as redirect url and return the payment details
Method Type: Get
Content-Type:Application/json
Calling-method:http://localhost:8080/paymentGateway/callback

### Advanced Configuration
During deployment set below enviroment variables. which will be valid for instamojo payment gateway
API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxx
AUTH_KEY=xxxxxxxxxxxxxxxxxx
REDIRECT_URL={domain_namae}/PaymentGateway/Callback

### DEMO

This section has moved here: https://paymentgatewayapp.herokuapp.com/

