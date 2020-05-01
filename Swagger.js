module.exports={
    
    "swagger": "2.0",
    "info": {
      "description": "Payment Gateway APi.",
      "version": "1.0.0",
      "title": "Payment Gateway API",
      "contact": {
        "email": "rishavmittal2903@gmail.com"
      }
      
    },
    "basePath": "/paymentGateway",
    "tags": [
      {
        "name": "InstaMojo Payment Gateway",
        "description": "Payment Gateway API Documentation"
      }
    ],
    "schemes": [
      "https",
      "http"
    ],
    "paths": {
      "/createPayment": {
        "post": {
          "tags": [
            "InstaMojo Payment Gateway"
          ],
          "summary": "Create new payment",
          "description": "Return the payment link",
          "operationId": "createPayment",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Payment data object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/CreatePaymentData"
              }
            }
          ],
          "responses": {
            "405": {
              "description": "Invalid input"
            }
          },
          
        }
      },
      "/getPaymentStatus/{paymentRequestId}": {
        "get": {
          "tags": [
            "InstaMojo Payment Gateway"
          ],
          "summary": "Fetch Payment Status",
          "description": "Fetch payment status by payment request id",
          "operationId": "getPaymentStatus",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "paymentRequestId",
              "in": "path",
              "description": "Payment request id",
              "required": true,
              "type": "string",
              "example": "xxxxxxxxxx"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "object"
              }
            },
            "400": {
              "description": "Invalid status value"
            }
          }
        }
      },
    
      "/getPaymentDetails/{paymentRequestId}/{paymentId}": {
        "get": {
          "tags": [
            "InstaMojo Payment Gateway"
          ],
          "summary": "Fetch Payment Detail",
          "description": "Fetch payment detail by payment request id",
          "operationId": "getPaymentDetails",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "paymentRequestId",
              "in": "path",
              "description": "Payment request id",
              "required": true,
              "type": "string",
              "example": "xxxxxxxxxx"
            },
            {
                "name": "paymentId",
                "in": "path",
                "description": "Payment id",
                "required": true,
                "type": "string",
                "example": "xxxxxxxxxx"
              }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "object"
              }
            },
            "400": {
              "description": "Invalid status value"
            }
          }
        }
      },
      "/refund": {
        "post": {
          "tags": [
            "InstaMojo Payment Gateway"
          ],
          "summary": "Initiate refund",
          "description": "Initiate refund amount",
          "operationId": "refund",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Payment data object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/RefundData"
              }
            }
          ],
          "responses": {
            "405": {
              "description": "Invalid input"
            }
          }
        }
      },
      "/getRefundStatus/{refundId}": {
        "get": {
          "tags": [
            "InstaMojo Payment Gateway"
          ],
          "summary": "Fetch Refund Status",
          "description": "Fetch Refund Status",
          "operationId": "getRefundStatus",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "refundId",
              "in": "path",
              "description": "Refund id",
              "required": true,
              "type": "string",
              "example": "xxxxxxxxxx"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "object"
              }
            },
            "400": {
              "description": "Invalid status value"
            }
          }
        }
      }
    },
    "definitions": {       
      "RefundData":{
        "type": "object",
        "required": [
          "payment_id",
          "type",
          "reason",
          "amount"
        ],
        "properties": {
          "payment_id": {
            "type": "string",
            "example": "test"
          },
          "type": {
            "type": "string",
            "example": "RFD"
          },
          "reason": {
            "type": "string",
            "example": "test"
          },
          "amount": {
            "type": "string",
            "example": "10"
          }
        },
        "xml": {
          "name": "RefundData"
        }
      },
      "CreatePaymentData": {
        "type": "object",
        "required": [
          "purpose",
          "amount",
          "phone",
          "email",
          "buyer_name"
        ],
        "properties": {
          "purpose": {
            "type": "string",
            "example": "test"
          },
          "amount": {
            "type": "string",
            "example": "10"
          },
          "phone": {
            "type": "string",
            "example": "1234567890"
          },
          "email": {
            "type": "string",
            "example": "test@gmail.com"
          },
          "buyer_name": {
            "type": "string",
            "example": "test"
          }
        },
        "xml": {
          "name": "CreatePaymentData"
        }
      }
    }
    
  }