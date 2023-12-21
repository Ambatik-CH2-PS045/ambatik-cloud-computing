# Ambatik Cloud Computing Documentation
Dive in: This documentation covers how to running this repo on your machine, tech stack, architecture, and API docs.

## Prerequisite

1. **Node JS:** `v20.10.0`

2. **NPM:** `v10.2.3`

## Getting Started:

1. Clone this [repository](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing.git)
   
   ```
   git clone https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing.git
   ```
2. Then, initialize package. json file.
   ```
   npm init -y
   ```
3. Install other package as this listed below:
   ```
   npm install --save sequelize
   npm install --save mysql2
   npm install nodemon jsonwebtoken express dotenv bcrypt @google-cloud/storage multer axios
   npm install -g sequelize-cli
   ```
4. Initiate sequelize config file
   ```
   sequelize init
   ```
   This command will generate config.json file to connect with the database
   ```
   {
        "development": {
          "username": "root",
          "password": null,
          "database": "ambatik_db",
          "host": "127.0.0.1",
          "dialect": "mysql"
        },
        "test": {
          "username": "root",
          "password": null,
          "database": "database_test",
          "host": "127.0.0.1",
          "dialect": "mysql"
        },
        "production": {
          "username": "root",
          "password": null,
          "database": "database_production",
          "host": "127.0.0.1",
          "dialect": "mysql"
        }
   }

   ```
   Feel free to modify the value as long as your database is mysql
   
4. Set up database by run this command
   ```
   sequelize db:create
   sequelize db:migrate
   sequelize db:seed:all
   ```
   In this case, database name will be `ambatik_db`, the migration will automatically create the table and relation that you can see in this [ERD picture](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing?tab=readme-ov-file#application-entity-relationship-diagram). Also There are several dummy data        that will be        filled in the seeder, such as user, article, product, quiz, seeder, answer, and    batik.

6. Create `.env` file like below
   ```
   PORT=
   ACCESS_TOKEN_SECRET=
   FLASK_HOST=
   ```
   For `PORT`, please fill in the PORT that has not been used, then `ACCESS_TOKEN_SECRET` is the token for authentication purposes, while `FLASK_HOST` is the host that will be used in the Flask application later    
   because the node.js application will later communicate with Flask

7. If you have a Google Cloud Platform credit, then please create a service account for a bucket that gives access to storing static files, such as images and machine learning models, if not then you can modify the code during the batik     prediction process and upload user profile photos. The service account JSON will be like below
   ```
   {
     "type": "",
     "project_id": "",
     "private_key_id": "",
     "private_key": "",
     "client_email": "",
     "client_id": "",
     "auth_uri": "",
     "token_uri": "",
     "auth_provider_x509_cert_url": "",
     "client_x509_cert_url": "",
     "universe_domain": ""
   }

   ```
8. Run the program with `npm run start` and if success, it should showing `Database Connection Success on PORT <Your .env PORT>` on your terminal

## Application Architecture
[ ![](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/application_architecture.jpg) ](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/application_architecture.jpg)

Our app has two backend services:
1. Node JS, for interaction with the mysql database so that any changes, reads, updates, or deletes of data (CRUD) will be done here.
2. Flask, for classification of batik images will be done here.

## Application Entity Relationship Diagram
[ ![](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/ERD_Ambatik.png) ](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/ERD_Ambatik.png)

## API
<details>
  <summary>Article</summary>
  Get all articles

  ```http
GET /article
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `string` | Giving all the articles |

**Responses:**

```
 {
    "error": false,
    "message": "Get all article success",
    "data": [
        {
            "id": 1,
            "title": "Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja",
            "url_banner": "https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel1.png",
            "author": "Devi Puspitasari - detikNews",
            "content": "Jakarta - Presiden Joko Widodo (Jokowi) hadiri acara Istana Berbatik di depan Istana Merdeka, Jalan Medan Merdeka Utara, Jakarta Pusat. Presiden Jokowi mengenakan batik coklat dengan motif Parang Barong yang biasa dikenakan raja. \n\nBerdasarkan keterangan dari Biro Pers Sekretariat Presiden, Minggu (1/10/2023), nama motif yang dipakai Presiden Jokowi adalah Batik Parang Barong Seling Kembang atau lengkapnya Parang Barong Seling Kembang Udan Riris. \n\nMotif batik yang dipakai oleh Jokowi memiliki makna, Motif Parang atau Memerangi. Motif itu memiliki makna seorang pemimpin harus berani bersikap tegas memerangi ketidak benaran yang ada. Motif batik Parang biasa dikenakan oleh Para Raja. \n\nKemudian, motif Udan Riris. Motif Hujan Gerimis memberikan kesejukan di tengah kondisi yang gersang/kering. Sementara itu, Ibu Negara Iriana Jokowi mengenakan kain batik motif truntum sebagai atasan, dan motif parang sebagai bawahan.",
            "total_like": 0,
            "createdAt": "2023-12-21T03:22:05.000Z",
            "updatedAt": "2023-12-21T03:22:05.000Z"
        },
        {
            "id": 2,
            "title": "Jokowi: Kita Harus Berani Perkenalkan Batik ke Acara Internasional",
            "url_banner": "https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel2.png",
            "author": "Yodie Hardiyan - Bisnis.com",
            "content": "Bisnis.com, JAKARTA--- Presiden Joko Widodo menyatakan masyarakat Indonesia harus berani memperkenalkan batik ke acara-acara internasional. Pernyataan itu disampaikan oleh Jokowi dalam acara peringatan Hari Batik Nasional ke-10 di Puro Mangkunegaran, Kota Surakarta, Rabu, (2/10/2019). \n\n“Kita juga harus berani memperkenalkan batik ke acara-acara internasional dan menjadikan batik sebagai duta budaya Indonesia pada masyarakat dunia,” tuturnya. Dalam kesempatan itu, Jokowi bercerita pertemuannya dengan mantan Perdana Menteri Australia, Malcolm Turnbull, beberapa waktu lalu. Saat itu, Turnbull datang dengan mengenakan batik yang telah disiapkan oleh Ibu Negara Iriana. Presiden mengaku dibuat pangling dengan penampilan Turnbull itu. “Saya pangling karena batiknya bagus sehingga betul-betul mengubah (gambaran) bahwa beliau bukan dari Australia, kelihatan dari Solo,” ucapnya. \n\nPresiden juga sangat senang mendengar bahwa pelajaran soal batik diberikan dalam muatan lokal di sejumlah sekolah. Saat Presiden menanyakan hal tersebut kepada salah satu pelajar SMK yang hadir dalam acara tersebut, pelajar itu menyampaikan bahwa pelajaran membatik diberikan di sekolah sebanyak tiga kali dalam seminggu. “Saya kira tiga kali sudah lebih dari cukup asal komitmen itu kita pegang terus sehingga komitmen untuk menjaga pengakuan Unesco yang menetapkan batik menjadi warisan kemanusiaan untuk budaya lisan dan nonbendawi betul-betul terus akan bisa kita pegang,” ujarnya.",
            "total_like": 0,
            "createdAt": "2023-12-21T03:22:05.000Z",
            "updatedAt": "2023-12-21T03:22:05.000Z"
        },

     ]
}
```
   

</details>

