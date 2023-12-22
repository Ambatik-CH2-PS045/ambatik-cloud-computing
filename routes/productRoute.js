const express = require('express');

//Import Controller
const ProductController = require('../Controller/productController.js');
// const CartController = require('../Controller/cartController.js');

const route = express.Router();

//GET ALL PRODUCT
route.get('/', ProductController.getAllProduct);

//GET SELECTED PRODUCT
route.get('/details/:productid', ProductController.getSelectedProduct);

//ADD / REDUCE PRODUCT TO CART
route.post('/cart', ProductController.addProductToCart);

//GET ALL PRODUCT IN CART
route.get('/cart/:userid', ProductController.getAllProductInCart);

//DELETE PRODUCT FROM CART
route.delete('/remove', ProductController.deleteProductFromCart);






module.exports = route;