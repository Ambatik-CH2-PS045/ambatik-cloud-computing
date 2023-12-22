const models = require('../models/');
const users = models.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const serviceAccount = require('../service_account/service_account.json');
const { Storage } = require("@google-cloud/storage");
const { format } = require("util");
const multer = require('multer');
const date = new Date();
const storage = new Storage({keyFilename: serviceAccount});

const bucket = storage.bucket("ambatik_bucket");
require('dotenv').config();

const getAllUsers = async(req, res) => {
    try{
        await users.findAll();

        res.status(200).json({
            error: false,
            message: 'Get all users success'
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Users',
            serverMessage: error.message
        })
    }
}

const createNewUser = async(req, res) => {
    const body = req.body;

    if(!body.username || !body.password || !body.email){
        return res.status(400).json({
            error: true,
            message: 'Bad request',
            data: null
        })
    }

    try{
        const usernameRegistered = await users.isUsernameRegistered(body.username);
        const emailRegistered = await users.isEmailRegistered(body.email)

        if (!usernameRegistered && !emailRegistered) {
            
            const hashedPassword = await bcrypt.hash(body.password, 10);

            await users.create({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword,
                phone: req.body.phone,
                url_profile: 'https://storage.googleapis.com/ambatik_bucket/user_photo/default-photo-profile.png'
            }); 

            res.status(201).json({
                error: false,
                message: 'Success register',
            });

        } else {
            res.status(409).json({
                error: true,
                message: 'Username or email already registered yet'
            })
        } 
    }
    catch(error){
        res.status(500).json({
            error: true,
            message: 'Server Error: Create New User',
            serverMessage: error.message
        })
    }
}

const loginUser = async(req, res) => {
    const body = req.body;

    if(!body.username || !body.password){
        return res.status(400).json({
            message: 'Bad request'
        })
    }

    try{
        const registered = await users.isUsernameRegistered(body.username);
        const accessToken = jwt.sign({ username: body.username }, process.env.ACCESS_TOKEN_SECRET)

        if (registered) {
            const loginChecker = await users.userLogin(body.username, body.password);

            if(loginChecker){   
                const id = await users.findOne({
                    where: {
                        username: req.body.username
                    }
                })


                res.status(200).json({
                    error: false,
                    message: 'Login success',
                    data:{
                        id: id.id,
                        accessToken: accessToken,
                    }
                })
            }
            else{
                res.status(401).json({
                    error: true,
                    message: 'Login failed, username or password is wrong'
                })
            }

        } else if (!registered) {
            res.status(401).json({
                error: true,
                message: 'Please regist first'
            })
        } 
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Login user failed',
            serverMessage: error.message
        })
    }

}

const userDetails = async (req, res, next) => {
    try{
        const userDetails = await users.findOne({
            attributes: ['name', 'address', 'email', 'username', 'phone', 'url_profile', 'point'],
            where: {
                id: req.params.userid
            }
        })

        res.status(200).json({
            error: false,
            message: 'Get detail user success',
            data: userDetails
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get User Details',
            serverMessage: error.message
        })
    }
}

const updateProfile = async (req, res, next) => {
    try{
        const userDetails = await users.findByPk(req.params.userid);
        if (!userDetails) {
            return res.status(404).json({ message: 'User not found' });
        }
        await userDetails.update({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            }, {
            where: { id: req.params.userid },
        });
        
        res.status(200).json({
            message: 'Update profile success',
            data: userDetails
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Update User Details',
            serverMessage: error.message,
            data: userDetails
        })
    }
}

const getUserDetails = async(req, res, next) => {
    try{
        const userDetails = await users.findOne({
            attributes: ['name', 'address', 'email', 'username', 'phone', 'url_profile', 'point'],
            where: {
                id: req.params.userid
            }
        })
        res.status(200).json({
            error: false,
            message: 'Get user details',
            data: userDetails
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get User Details',
            serverMessage: error.message
        })
    }
} 

const uploadFile = async (req, res) => {
    try{
        if(!req.body.userid || !req.file){
            return res.status(400).json({
                error: true,
                message: 'Bad request',
                data: null
            })
        }

        const userDetails = await users.findByPk(req.body.userid);

        if (!userDetails) {
            res.status(404).json({
                error: true,
                uploaded: false,
                message: 'User not found',
                url: null
            })
        }
        else{
            const file = req.file;
            const userid = req.body.userid;
            if (!file) {
                return res.status(400).send('No file uploaded');
            }

            const fileData = file.buffer;
            const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
            const fileName = formattedDate + file.originalname;

            // Load service account JSON file
            const serviceAccount = require('../service_account/service_account.json');

            // Initialize Google Cloud Storage using service account
            const storage = new Storage({
                projectId: serviceAccount.project_id,
                credentials: {
                client_email: serviceAccount.client_email,
                private_key: serviceAccount.private_key,
                },
            });

            const bucket = storage.bucket('ambatik_bucket');
            const folderPath = 'user_photo';
            const fileRef = bucket.file(`${folderPath}/${fileName}`);
            await fileRef.save(fileData);

            // const fileURL = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
            const fileURL = `https://storage.googleapis.com/${bucket.name}/user_photo/${fileName}`;
            // const fileURL = `https://storage.cloud.google.com/user-photo-profile/${bucket.name}/user_photo/${fileName}`;
            await userDetails.update({
                url_profile: fileURL,
                }, {
                where: { id: req.body.userid },
            });
            // res.send({ fileURL });
            res.status(201).json({
                error: false,
                uploaded: true,
                message: 'Success upload photo profile',
                url: fileURL
            })
        }
    }
    catch(error){
        res.status(400).json({
            error: true,
            uploaded: false,
            message: 'Failed upload photo profile',
            url: null
        })
    }
};


const authenticateToken = async (req, res, next) => {
    
    const authHeader = req.headers['authorization'];
    
    if(authHeader){
        const token = authHeader.split(' ')[1];
        
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
            if(err) return res.sendStatus(403);
            req.username = username;
            next();
        })
    }
    else{
        res.status(401).json({
            error: true,
            message: 'Unauthorized access'
        })
    }
    
}



module.exports = {
    getAllUsers,
    createNewUser,
    loginUser,
    authenticateToken,
    getUserDetails,
    updateProfile,
    uploadFile
}

