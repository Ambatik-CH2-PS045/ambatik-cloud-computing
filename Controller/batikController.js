const { Op } = require('sequelize');
const models = require('../models/');
const batik = models.batik;
const product = models.product;
const batikProduct = models.batik_product;
const serviceAccount = require('../service_account/service_account.json');
const { Storage } = require("@google-cloud/storage");
const sequelize = models.sequelize;
const date = new Date();
const storage = new Storage({keyFilename: serviceAccount});
const axios = require('axios');

const getAllBatik = async(req, res) => {
    try{
        const allBatik = await batik.findAll(
            {
                attributes: ['id', 'name', 'url_batik', 'origin'], 
            }
        );

        res.status(200).json({
            error: false,
            message: 'Get all batik success',
            data: allBatik
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Article',
            serverMessage: error.message
            })
        }
}

const getSelectedBatik = async(req, res) => {
    try{
        const selectedBatik = await batik.findOne({
            attributes: [
                'name',
                'url_batik',
                'origin',
                'meaning',
                'making_process',
                'usage_purpose'
            ],
            where: {
                id: req.params.id,
            },
        });

        const batikName = selectedBatik.name;
        const getBatikName = batikName.replace('Batik ', '');

        const productRecommendation = await product.findAll({
            attributes: [
                'id',
                'name',
                'url_product',
                'price',
                'rating',
                'product_sold',
                'store_name'
            ],
            where: {
                name: {
                [Op.like]: '%'+getBatikName+'%',
                }
            }
        });

        res.status(200).json({
            error: false,
            message: 'Get selected batik',
            data: selectedBatik,
            products: productRecommendation
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get Selected Batik',
            serverMessage: error.message
        })
    }
}

const predictBatik = async(req, res) => {
    try{
        if(!req.file){
            return res.status(400).json({
                error: true,
                message: 'Bad request',
                data: null
            })
        }

        const file = req.file;
        if (!file) {
            return res.status(400).json({
                error: true,
                message: 'No image uploaded',
                data: null
            })
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
        const folderPath = 'batik_prediction_photo';
        const fileRef = bucket.file(`${folderPath}/${fileName}`);
        await fileRef.save(fileData);

        // const fileURL = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        const fileURL = `https://storage.googleapis.com/${bucket.name}/batik_prediction_photo/${fileName}`;
        // const fileURL = `https://storage.cloud.google.com/user-photo-profile/${bucket.name}/user_photo/${fileName}`;

        const flaskUrl = `http://${process.env.FLASK_HOST}:5000/process-image`;
        

        axios.post(flaskUrl, { fileName: fileName })
        .then(async (response) => {
            // Handle the response from the local Flask API
            // res.status(200).send('receive ok');
            const batikName = response.data['types'];
            const accuracy = response.data['accuracy'];
            const rounded = accuracy.toFixed(2);
            const selectedBatik = await batik.findOne({
            attributes: [
                'id',
                'name',
                'url_batik',
                'origin',
                'meaning',
                'making_process',
                'usage_purpose'
            ],
                where: {
                    name: `Batik ${batikName}`,
                },
            });

            const productRecommendation = await product.findAll({
            attributes: [
                'id',
                'name',
                'url_product',
                'price',
                'rating',
                'product_sold',
                'store_name'
            ],
            where: {
                name: {
                [Op.like]: '%'+batikName+'%',
                }
            }
            });

            res.status(200).json({
                error: false,
                message: 'Get prediction batik',
                batikName: batikName,
                accuracy: parseFloat(rounded),
                data: selectedBatik,
                products: productRecommendation
                // others: response.data
            })
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Server Error: Get Prediction Batik',
                serverMessage: error.message
            })
        });
    }
    catch(error){
        res.status(500).json({
            error: true,
            uploaded: false,
            message: 'Failed upload batik prediction photo',
            url: null,
            errorMsg: error.message
        })
    }
}

const personalization = async(req, res) => {
    // name,class 1,2,3, score, id, image name
    let truntum = ['Truntum', 1, 1, 2, 0, 1, '1_truntum.jpg']
    let tambal = ['Tambal', 2, 1, 1, 0, 2, '2_tambal.jpg'];
    let sogan = ['Sogan', 2, 1, 2, 0, 3, '3_sogan.jpg'];
    let simbut = ['Simbut', 1, 2, 1, 0, 4, '4_simbut.jpg'];
    let sekar_jagad = ['Sekar Jagad', 1, 1, 1, 0, 5, '5_sekar_jagad.jpg'];
    let pring_sedapur = ['Pring Sedapur', 1, 2, 1, 0, 6, '6_pring_sedapur.jpg'];
    let poleng = ['Poleng', 1, 2, 1, 0, 7, '7_poleng.jpg'];
    let parang = ['Parang', 2, 1, 1, 0, 8, '8_parang.jpg'];
    let nitik = ['Nitik', 2, 1, 2, 0, 9, '9_nitik.jpg'];
    let mega_mendung = ['Mega Mendung', 1, 2, 1, 0, 10, '10_mega_mendung.jpg'];
    let lasem = ['Lasem', 1, 2, 1, 0, 11, '11_lasem.jpg'];
    let kawung = ['Kawung', 2, 1, 2, 0, 12, '12_kawung.png'];
    let insang = ['Insang', 1, 2, 2, 0, 13, '13_insang.jpg'];
    let geblek_renteng = ['Geblek Renteng', 1, 2, 2, 0, 14, '14_geblek_renteng.jpg'];
    let cendrawasih = ['Cendrawasih', 1, 2, 2, 0, 15, '	15_cendrawasih.jpg'];

    let batikList = [truntum,tambal, sogan, simbut, sekar_jagad, pring_sedapur, poleng, parang, nitik, mega_mendung, lasem, kawung, insang, geblek_renteng, cendrawasih];

    const jawaban_user = req.body.userAnswers;
    for (let i = 0; i < batikList.length; i++) {
        for (let j = 0; j < jawaban_user.length; j++) {
            if (batikList[i][j + 1] === jawaban_user[j]) {
                batikList[i][4] = batikList[i][4] + 1;
            }
        }
    }

    // Sorting the batikList based on the value at index 4 in descending order
    batikList.sort((a, b) => b[4] - a[4]);

    // Getting the top three results
    let topThreeResults = batikList.slice(0, 3);

    // Creating a JSON object for the top three results
    let resultJSON = [];
    for (let i = 0; i < topThreeResults.length; i++) {
    let batikObject = {
        id: topThreeResults[i][5],
        name: topThreeResults[i][0],
        url_image: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/'+topThreeResults[i][6]
        // votes: topThreeResults[i][4]
    };
    resultJSON.push(batikObject);
    }

    res.status(200).json({
        error: false,
        message: 'Get selected batik',
        data: resultJSON
    })



}
module.exports = {
    getAllBatik,
    getSelectedBatik,
    predictBatik,
    personalization
}
