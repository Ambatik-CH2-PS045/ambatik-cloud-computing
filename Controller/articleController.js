const models = require('../models/');
const article = models.article;
const like = models.like;
const user = models.user;

const getAllArticle = async(req, res) => {
    try{
        const allArticle = await article.findAll();

        res.status(200).json({
            error: false,
            message: 'Get all article success',
            data: allArticle
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Article',
            serverMessage: error.message
            })
        }
    }

const getSelectedArticle = async(req, res) => {
    try{
        let selectedArticle;
        if(!req.params.userid){
            selectedArticle = await article.findOne({
                attributes: ['id', 'title', 'url_banner', 'author', 'content', 'total_like'], 
                include: [
                    {
                    model: like,
                    attributes: ['status_like'],
                    include: [
                        {
                            model: user,
                            attributes: [],
                        },
                    ],
                    },
                ],
                where: {
                    id: req.params.id, 
                },
            });
        }
        else{
            selectedArticle = await article.findOne({
                attributes: ['id', 'title', 'url_banner', 'author', 'content', 'total_like'], 
                include: [
                    {
                    model: like,
                    attributes: ['status_like'],
                    include: [
                        {
                            model: user,
                            attributes: [],
                            where: {
                                id: req.params.userid, 
                            },
                        },
                    ],
                    },
                ],
                where: {
                    id: req.params.id, 
                },
            });

            var status = ""
            const hasStatusOne = selectedArticle.likes.some(like => like.status_like === "1");

            if (hasStatusOne) {
                status = true;
            }
            else{
                status = false;
            }
        }
        
        res.status(200).json({
            error: false,
            liked: status,
            message: 'Get detail article success with like status',
            data: selectedArticle,
            // val: value
        })

    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get Selected Article',
            serverMessage: error.message
        })
    }
}


const getAllLikedArticle = async(req, res) => {
    //RAW QUERY
    // SELECT `article`.`id`, `article`.`title`, `article`.`url_banner`, `article`.`author`, `article`.`content`, `article`.`total_like`, `article`.`createdAt`, `article`.`updatedAt`, `likes`.`id` AS `likes.id`, `likes`.`status_like` AS `likes.status_like` 
    // FROM `articles` AS `article` 
    // INNER JOIN `likes` AS `likes` ON `article`.`id` = `likes`.`articleId` AND `likes`.`status_like` = '1' AND `likes`.`userId` = '6';
    
    try{
        const allLikedArticle = await article.findAll({
            attributes: [
                'id',
                'title',
                'url_banner',
                'author',
                'content',
                'total_like'
            ],
            include: [
                {
                model: like,
                attributes: ['id', 'status_like'],
                where: {
                    status_like: '1',
                    userId: req.params.id,
                },
                required: true,
                },
            ],
        });
        
        if(allLikedArticle.length == 0){
            res.status(200).json({
                error: false,
                message: 'There are no liked articles',
                data: allLikedArticle
            })
        }
        else if(allLikedArticle.length >0){
            res.status(200).json({
                error: false,
                message: 'Get all liked article success',
                data: allLikedArticle
            })
        }
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Liked Article',
            serverMessage: error.message
        })
    }
}

const likeArticle = async(req, res) => {
    try{
        const selectedArticle = await article.findOne({
            attributes: ['id', 'url_banner', 'author', 'content', 'total_like'], // Select the desired attributes from the articles table
            include: [
                {
                model: like,
                attributes: ['status_like'],
                include: [
                    {
                        model: user,
                        attributes: [], // Add any user attributes you want to include
                        where: {
                            id: req.body.userId, // Specify the id
                        },
                    },
                ],
                },
            ],
            where: {
                id: req.body.articleId, // Specify the article ID
            },
        });

        const hasStatusOne = selectedArticle.likes.some(like => like.status_like === "1");
        
        //Like for firsttime
        if(!selectedArticle.likes.length){
            const articleId = selectedArticle.id;

            await like.create({
                status_like: '1',
                userId: req.body.userId,
                articleId: articleId,
            }); 

            article.increment(
                { total_like: +1 },
                { where: { id: req.body.articleId } }
            );

            res.status(200).json({
                error: false,
                liked: true,
                message: 'Success like first time',
            })

        }
        //Unlike
        else if (hasStatusOne) {
            const [updatedRowsCount, updatedRows] = await like.update(
                { status_like: '0' }, // Set the new value
                { where: { userId: req.body.userId, articleId: req.body.articleId } }
            );
            if (updatedRowsCount > 0) {

                article.increment(
                    { total_like: -1 },
                    { where: { id: req.body.articleId } }
                );

                res.status(200).json({
                    error: false,
                    liked: false,
                    message: 'Success unlike',
                })
            } else {
                res.status(200).json({
                    error: false,
                    liked: false,
                    message: 'No like found hasStatusOne',
                })
            }
        }
        //Like
        else if(!hasStatusOne){
            const [updatedRowsCount, updatedRows] = await like.update(
                { status_like: '1' }, // Set the new value
                { where: { userId: req.body.userId, articleId: req.body.articleId } }

            );
            
            if (updatedRowsCount > 0) {
                
                article.increment(
                    { total_like: +1 },
                    { where: { id: req.body.articleId } }
                );
                
                // Access the updated rows if needed
                res.status(200).json({
                    error: false,
                    liked: true,
                    message: 'Success like again',
                })
            } else {
                res.status(200).json({
                    error: false,
                    liked: false,
                    message: 'No like found !hasStatusOne',
                    status: selectedArticle.l
                })
            }


        }
        // else if(!selectedArticle.likes.length){
        //     const articleId = selectedArticle.id;

        //     await like.create({
        //         status_like: '1',
        //         userId: req.body.userId,
        //         articleId: articleId,
        //     }); 

        //     res.status(200).json({
        //         error: false,
        //         liked: true,
        //         message: 'Success like first time',
        //     })

        // }

    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Post Like / Unlike Article',
            serverMessage: error.message
        })
    }
}


module.exports = {
    getAllArticle,
    getSelectedArticle,
    getAllLikedArticle,
    likeArticle
}