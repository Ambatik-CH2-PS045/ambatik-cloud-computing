const express = require('express');

//Import User Controller
const UserController = require('../Controller/userController.js');
const route = express.Router();

//GET ALL USER
route.get('/', UserController.getAllUsers);

// GET USER DETAIL
route.get('/details/:userid', UserController.getUserDetails);

//USER REGISTER
route.post('/register', UserController.createNewUser);

//USER LOGIN
route.post('/login', UserController.loginUser);

//UPDATE USER PROFILE
route.patch('/update/:userid', UserController.updateProfile);

//UPDATE PHOTO PROFILE
// route.post('/changephoto', UserController.uploadFile);

// route.post('/upload', upload.single('file'), UserController.uploadFile);




// //USER DELETE
// route.delete('/:id', UserController.deleteUser);

module.exports = route;

