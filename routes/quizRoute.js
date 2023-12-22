const express = require('express');

//Import Controller
const QuizController = require('../Controller/quizController.js');
const route = express.Router();

//GET ALL QUIZ
route.get('/list/:userid', QuizController.getAllQuizType);

//GET QUESTION 
route.get('/:quizId/question/:questionid', QuizController.getQuestion);

//SUBMIT ANSWER
route.post('/submit', QuizController.submitQuiz);

//GET USER LEADERBOARD
route.get('/leaderboard/', QuizController.getLeaderboard);

module.exports = route;