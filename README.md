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





