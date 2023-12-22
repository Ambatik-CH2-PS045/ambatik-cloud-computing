const models = require('../models/');
const sequelize = models.sequelize;
const quiz  = models.quiz;
const quizHistory = models.quiz_history;
const question = models.question;
const answer = models.answer;
const user = models.user;

const getAllQuizType = async(req, res) => {
    try{

        // const quizType = await quiz.findAll({
        //     attributes: ['id', 'type', [sequelize.literal('COALESCE(quiz_histories.done, 0)'), 'done']],
        //     include: [
        //         {
        //             model: quizHistory,
        //             attributes: ['id', 'done', 'createdAt', 'userId', 'quizId', 'point'],
        //             where: { userId: req.params.userid },
        //             required: false,
        //         },
        //     ],
        //     // order: [[sequelize.literal('quiz_histories.point DESC')]], // Highest point
        // });
        // let quizType;

        // if(!req.params.userid){
        //     quizType = await quiz.findAll({
        //         attributes: ['id', 'type', ],
        //         include: [
        //             {
        //                 model: quizHistory,
        //                 attributes: ['id', 'done', 'createdAt', 'userId', 'quizId', 'point'],
        //                 required: false,
        //                 order: [['point', 'DESC']], // Order quizHistory records by point in descending order
        //                 limit: 1, // Retrieve only the top record (highest score) for each module
        //             },
        //         ],
        //         order: [['id', 'ASC']], // Order the main quiz records by id in ascending order
        //     })
        // }
        // else{
        //     quizType = await quiz.findAll({
        //         attributes: ['id', 'type', ],
        //         include: [
        //             {
        //             model: quizHistory,
        //             attributes: ['id', 'done', 'createdAt', 'userId', 'quizId', 'point'],
        //             where: { userId: req.params.userid },
        //             required: false,
        //             order: [['point', 'DESC']], // Order quizHistory records by point in descending order
        //             limit: 1, // Retrieve only the top record (highest score) for each module
        //             },
        //         ],
        //         order: [['id', 'ASC']], // Order the main quiz records by id in ascending order
        //     });
        // }

        let queryOptions = {
            attributes: ['id', 'type'],
            include: [
                {
                    model: quizHistory,
                    attributes: ['id', 'done', 'createdAt', 'userId', 'quizId', 'point'],
                    required: false,
                    order: [['point', 'DESC']], // Order quizHistory records by point in descending order
                    limit: 1, // Retrieve only the top record (highest score) for each module
                },
            ],
            order: [['id', 'ASC']], // Order the main quiz records by id in ascending order
        };

        // Conditionally add where clause based on the presence of userid
        if (req.params.userid) {
            queryOptions.include[0].where = { userId: req.params.userid };
        }

        quizType = await quiz.findAll(queryOptions);
        

        res.status(200).json({
            error: false,
            message: 'Get all quiz type',
            data: quizType,
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Quiz Type',
            serverMessage: error.message
        })
    }
}

const getQuestion = async(req, res) => {
    try{
        const specificQuestion = await question.findOne({
            attributes: ['id', 'question'],
            where: {
                id: req.params.questionid,
                quizId: req.params.quizId,
            },
            include: [
                {
                    model: answer,
                    attributes: ['id', 'answer', 'questionId'],
                },
            ],
        })
        res.status(200).json({
            error: false,
            message: 'Get question',
            data: specificQuestion,
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get Specific Question',
            serverMessage: error.message
        })
    }
}

const submitQuiz = async(req, res) => {
    try{
        const userId = req.body.userid
        const quizId = req.body.quizid;
        const questionIds = req.body.questionIds;
        const answerIds = req.body.answerIds;
        let result;
        let checkAnswer;
        let accumulatePoint= 0;
        let totalCorrect = 0;
        let totalWrong = 0;
        const quizScore = [];
        
        const selectedUser = await user.findByPk(userId);
        if(selectedUser){
            for(let i = 0; i < answerIds.length; i++){
                result = await question.findOne({
                        attributes: ['question'],
                        include: [
                            {
                                model: answer,
                                attributes: ['truth'],
                                where: { id: answerIds[i] },
                            },
                            {
                                model: quiz,
                                attributes: ['type'],
                                where: { id: quizId },
                            },
                        ],
                        where: {
                            id: questionIds[i],
                        },
                });
                    
                checkAnswer = result['answers'][0]['truth'];
                if(checkAnswer == '1'){
                    accumulatePoint += 100;
                    totalCorrect += 1;
                }
                else{
                    totalWrong +=1;
                }
            }

            const historyChecker = await quizHistory.findAll({
                where: { 
                    userId: userId,
                    quizId: quizId 
                },
            })

            const existHighestPointResult = await quizHistory.max('point', {
            where: {
                userId: userId,
                quizId: quizId
            }
            });

            // Extract the value from the result object
            const existHighestPoint = existHighestPointResult;

            const firstAttempt = historyChecker.length === 0;

            if (firstAttempt) {
            await selectedUser.increment('point', { by: accumulatePoint });
            } else {
            // Compare exist point & latest obtained point
            const obtainedPoint = Math.max(0, accumulatePoint - existHighestPoint);
            await selectedUser.increment('point', { by: obtainedPoint });
            }
                        

           // const currentDate = new Date().toISOString();
            // const currentDate = new Date();
            const insertQuizHistory = `
            INSERT INTO quiz_histories (done, createdAt, updatedAt, userId, quizId, point)
            VALUES ('1', NOW(), NOW(), ${userId}, ${quizId}, ${accumulatePoint});
            `;

            await sequelize.query(insertQuizHistory, { type: sequelize.QueryTypes.INSERT });


            quizScore.push({
                'summary': {
                    'firstAttempt': firstAttempt,
                    'previousHighest': existHighestPoint,
                    'totalCorrect': totalCorrect,
                    'totalWrong': totalWrong,
                    'accumulatePoint': accumulatePoint,
                    // 'history': historyChecker,
                }
            });
            res.status(200).json({
                error: false,
                message: 'Submitted quiz and get result',
                data: quizScore,
            })
        }
        else{
            res.status(404).json({
                error: true,
                message: 'User not found',
                data: null,
            })
        }
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Submit Quiz',
            serverMessage: error.message
        })
    }
}

const getLeaderboard = async(req, res) => {
    try{
        const allUsers = await user.findAll({
            attributes: ['name', 'point', 'url_profile'],
            order: [['point', 'DESC']],
        });
        res.status(200).json({
            error: false,
            message: 'Get user leaderboard',
            data: allUsers,
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get User Leaderboard',
            serverMessage: error.message
        })
    }
}

module.exports = {
    getAllQuizType,
    getQuestion,
    submitQuiz,
    getLeaderboard
}
