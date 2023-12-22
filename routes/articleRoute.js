const express = require('express');

//Import Article Controller
const ArticleController = require('../Controller/articleController.js');


const route = express.Router();

//GET ALL ARTICLE
route.get('/', ArticleController.getAllArticle);

//LIKE / UNLIKE ARTICLE
route.post('/like', ArticleController.likeArticle);

//GET SELECTED ARTICLE
route.get('/details/:id/:userid', ArticleController.getSelectedArticle);

//GET ALL LIKED ARTICLE
route.get('/like/:id', ArticleController.getAllLikedArticle);

module.exports = route;
