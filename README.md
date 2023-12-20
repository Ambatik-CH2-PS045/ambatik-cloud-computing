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
   In this case, database name will be `ambatik_db`, the migration will automatically create the table and relation that you can see in this ERD picture. Also There are several dummy data        that will be filled in the seeder, such as user, article, product, quiz, seeder, answer, and batik.

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





