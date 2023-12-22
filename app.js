require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const { sequelize } = require('./models/index.js');
const {Storage} = require('@google-cloud/storage');
const serviceAccount = require('./service_account/service_account.json');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

//DB Connection Import
const dbconnection = require('./config/dbconnection.js');

//Authenticate Token Import
const { authenticateToken } = require('./Controller/userController.js');

//Route Import
const userRoute = require('./routes/userRoute.js');
const articleRoute = require('./routes/articleRoute.js');
const productRoute = require('./routes/productRoute.js');
const orderRoute = require('./routes/orderRoute.js');
const quizRoute = require('./routes/quizRoute.js');
const batikRoute = require('./routes/batikRoute.js');

//Import Controller
const UserController = require('./Controller/userController.js');
const ArticleController = require('./Controller/articleController.js');
const BatikController = require('./Controller/batikController.js');
const ProductController = require('./Controller/productController.js');
const QuizController = require('./Controller/quizController.js');


const skipAuthForPublicRoutes = (req, res, next) => {
    next();
};

//PUBLIC ROUTE
app.get('/article/', skipAuthForPublicRoutes, ArticleController.getAllArticle);
app.get('/article/details/:id/:userid?', skipAuthForPublicRoutes, ArticleController.getSelectedArticle)
app.get('/product/', skipAuthForPublicRoutes, ProductController.getAllProduct);
app.get('/product/details/:productid', skipAuthForPublicRoutes, ProductController.getSelectedProduct);
app.get('/quiz/leaderboard/', skipAuthForPublicRoutes, QuizController.getLeaderboard);
app.get('/quiz/list/:userid?', skipAuthForPublicRoutes, QuizController.getAllQuizType);
app.get('/batik/', skipAuthForPublicRoutes, BatikController.getAllBatik);
app.get('/batik/:id', skipAuthForPublicRoutes, BatikController.getSelectedBatik);
app.post('/batik/personalization', skipAuthForPublicRoutes, BatikController.personalization);


app.use('/users', userRoute);
app.use('/users/upload', authenticateToken, upload.single('file'), UserController.uploadFile);
app.use('/article', authenticateToken, articleRoute);
app.use('/product', authenticateToken, productRoute);
app.use('/order', authenticateToken, orderRoute);
app.use('/quiz', authenticateToken, quizRoute);
app.use('/batik', authenticateToken, batikRoute);
app.use('/batik/predict', authenticateToken, upload.single('file'), BatikController.predictBatik);


//Error
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})


app.listen(PORT, async ()=>{
    console.log(`Server Running on PORT ${PORT}`);
    await sequelize.sync();
    console.log(`Database Connection Success on PORT ${PORT}`);
})

//Database Connection Checker Route
app.use('/', (req, res) => {
    // res.send("Hello World: Ambatik Backend");\
    try {
        dbconnection;
        res.status(200).json({
            message: 'Database Connection Success',
            // name: name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Database Connection Failed'
        });
    }
})

// const bucket = gc.bucket('user-photo-profile');
// const resolvers = {
//     Query: {
//         files: ()=> files
//     },
//     Mutation:{
//         uploadFile: async (_, {file}) => {
//             const {createReadStream, filename} = await file;

//             await new Promise(res =>{
//                 createReadStream()
//                 .pipe(
//                     bucket.file(filename).createWriteStream({
//                         resumable: false,
//                         gzip: true
//                     })
//                 )
//                 .on("finish", res)
//             });
//             files.push(filename);

//             return true;
//         }
//     }
// }


// main();