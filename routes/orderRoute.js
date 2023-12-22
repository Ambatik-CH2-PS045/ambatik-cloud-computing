const express = require('express');

//Import Article Controller
const OrderController = require('../Controller/orderController.js');

const route = express.Router();

//GET ALL ORDER
route.get('/:userid', OrderController.getAllOrder);

//GET DETAIL ORDER
route.get('/details/:id/:userid', OrderController.getDetailOrder);

//ADD ORDER
route.post('/checkout', OrderController.checkout);


module.exports = route;
