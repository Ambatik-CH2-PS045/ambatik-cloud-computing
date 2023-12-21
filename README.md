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
  
## Get all articles

  ```http
GET /article
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Responses:**

```JSON
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

## Get liked article

  ```http
GET /article/like/:id (require bearer token)
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | `Integer` | required |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get all liked article success",
    "data": [
        {
            "id": 1,
            "title": "Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja",
            "url_banner": "https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel1.png",
            "author": "Devi Puspitasari - detikNews",
            "content": "Jakarta - Presiden Joko Widodo (Jokowi) hadiri acara Istana Berbatik di depan Istana Merdeka, Jalan Medan Merdeka Utara, Jakarta Pusat. Presiden Jokowi mengenakan batik coklat dengan motif Parang Barong yang biasa dikenakan raja. \n\nBerdasarkan keterangan dari Biro Pers Sekretariat Presiden, Minggu (1/10/2023), nama motif yang dipakai Presiden Jokowi adalah Batik Parang Barong Seling Kembang atau lengkapnya Parang Barong Seling Kembang Udan Riris. \n\nMotif batik yang dipakai oleh Jokowi memiliki makna, Motif Parang atau Memerangi. Motif itu memiliki makna seorang pemimpin harus berani bersikap tegas memerangi ketidak benaran yang ada. Motif batik Parang biasa dikenakan oleh Para Raja. \n\nKemudian, motif Udan Riris. Motif Hujan Gerimis memberikan kesejukan di tengah kondisi yang gersang/kering. Sementara itu, Ibu Negara Iriana Jokowi mengenakan kain batik motif truntum sebagai atasan, dan motif parang sebagai bawahan.",
            "total_like": 1,
            "likes": [
                {
                    "id": 2,
                    "status_like": "1"
                }
            ]
        }
    ]
}
```

## Get article detail

  ```http
GET /article/details/:id/?userid
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | `Integer` | `Required` |
| `userid` | `Integer` | `Optional` |

**Responses:**

```JSON
{
    "error": false,
    "liked": false,
    "message": "Get detail article success with like status",
    "data": {
        "id": 1,
        "title": "Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja",
        "url_banner": "https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel1.png",
        "author": "Devi Puspitasari - detikNews",
        "content": "Jakarta - Presiden Joko Widodo (Jokowi) hadiri acara Istana Berbatik di depan Istana Merdeka, Jalan Medan Merdeka Utara, Jakarta Pusat. Presiden Jokowi mengenakan batik coklat dengan motif Parang Barong yang biasa dikenakan raja. \n\nBerdasarkan keterangan dari Biro Pers Sekretariat Presiden, Minggu (1/10/2023), nama motif yang dipakai Presiden Jokowi adalah Batik Parang Barong Seling Kembang atau lengkapnya Parang Barong Seling Kembang Udan Riris. \n\nMotif batik yang dipakai oleh Jokowi memiliki makna, Motif Parang atau Memerangi. Motif itu memiliki makna seorang pemimpin harus berani bersikap tegas memerangi ketidak benaran yang ada. Motif batik Parang biasa dikenakan oleh Para Raja. \n\nKemudian, motif Udan Riris. Motif Hujan Gerimis memberikan kesejukan di tengah kondisi yang gersang/kering. Sementara itu, Ibu Negara Iriana Jokowi mengenakan kain batik motif truntum sebagai atasan, dan motif parang sebagai bawahan.",
        "total_like": 1,
        "likes": []
    }
}
```

## Like or unlike article

  ```http
POST /article/like (require bearer token)
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Request Body:**

```JSON
{
    "userId": 1,
    "articleId": 1
}
```

**Responses:**

Like
```JSON
{
    "error": false,
    "liked": true,
    "message": "Success like first time"
}
```


Unlike
```JSON
{
    "error": false,
    "liked": true,
    "message": "Success like first time"
}
```
</details>




<details>
  <summary>User</summary>
  
<<<<<<< HEAD
## User register

    ```http
=======
 ## User register
 ```http
>>>>>>> 09a4d6d3eb68269e845b22ef2e3584531e51e99a
POST /users/register
```
**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Request Body:**

```JSON
{
    "name": "Jean Doe",
    "email": "jeandoe@gmail.com",
    "username": "jeandoe",
    "password": "jeandoe123",
    "phone": "081234567890"
}
```

**Responses:**
<br>
Success register
```JSON
{
    "error": false,
    "message": "Success register"
}
```

Account already exist
```JSON
{
    "error": true,
    "message": "Username or email already registered yet"
}
```
<<<<<<< HEAD

## User login

    ```http
POST /users/login
=======
 ## User login
 ```http
POST /users/register
>>>>>>> 09a4d6d3eb68269e845b22ef2e3584531e51e99a
```
**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Request Body:**

```JSON
{
<<<<<<< HEAD
    "error": true,
    "message": "Please regist first"
=======
    "username": "johndoe",
    "password": "john123"
>>>>>>> 09a4d6d3eb68269e845b22ef2e3584531e51e99a
}
```

**Responses:**
<br>
Account not registered
```JSON
{
    "error": true,
    "message": "Please regist first"
}
```

Success login
```JSON
{
    "error": false,
    "message": "Login success",
    "data": {
        "id": 1,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpYXQiOjE3MDMxNDg3Njd9.MH67wX73tS-Nz-Y1qZC8jWgqFdQQUrOXUDg0Sl0H4kk"
    }
}
```

## Get user details


  ```http
GET /users/details/:userid
```
**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `userid` | `integer` | `required` |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get user details",
    "data": {
        "name": "john",
        "address": "Jakarta",
        "email": "john@example.com",
        "username": "johndoe",
        "phone": "08123456789",
        "url_profile": "https://static9.depositphotos.com/1074452/1184/i/450/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg",
        "point": 0
    }
}
```

## Change photo profile
  ```http
POST /users/upload
```
**Request Form Data:**

| Key | Type | Value |
|---|---|---|
| `file` | `file` | `file-name-example.jpg` |
| `userid` | `text` | `1` |

**Responses:**

```JSON
{
    "error": false,
    "uploaded": true,
    "message": "Success upload photo profile",
    "url": "https://storage.googleapis.com/ambatik_bucket/user_photo/21-12-2023-8-43-44Python-logo-notext.svg.png"
}
```

## Edit user profile
  ```http
POST /users/update/:userid (require bearer token)
```

**Request Body:**

```JSON
{
    "address": "Jakarta Selatan",
    "phone": "123456789011"
}
```

**Responses:**

```JSON
{
    "message": "Update profile success",
    "data": {
        "id": 3,
        "name": "Gek Ari",
        "address": "Jakarta Selatan",
        "email": "gekari420@gmail.com",
        "username": "gekari",
        "password": "$2b$10$13TjO0k5jZkI7x04FODypOdh.bh4hi7Pb6bXsC/i7Dk1oNuE1iQby",
        "phone": "123456789011",
        "url_profile": "https://storage.googleapis.com/ambatik_bucket/user_photo/21-12-2023-8-43-44Python-logo-notext.svg.png",
        "createdAt": "2023-12-21T05:52:36.000Z",
        "updatedAt": "2023-12-21T09:02:33.852Z"
    }
}
```

</details>

<details>
  <summary>Product</summary>

## Get all products

  ```http
GET /product
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get all product success",
    "data": [
        {
            "id": 1,
            "name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk1.png",
            "price": 135000,
            "rating": 4.9,
            "product_sold": 214,
            "store_name": "Deny Batik"
        },
        {
            "id": 2,
            "name": "Hadinata Batik Pria Kemeja Panjang Furing Semi Sutra Zafeer Zahra",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk2.png",
            "price": 419000,
            "rating": 4.9,
            "product_sold": 264,
            "store_name": "Hadinata Batik Official Shop"
        },
        {
            "id": 3,
            "name": "Batik Pria WAYANG SOGAN Full Furing Bahan Katun Halus High Quality",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk3.png",
            "price": 120000,
            "rating": 4.7,
            "product_sold": 464,
            "store_name": "Batik Dewa Ruci"
        },
        {
            "id": 4,
            "name": "Laskala Batik Premium Slimfit Sandro 2.0 K08A331",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk4.png",
            "price": 495000,
            "rating": 4.8,
            "product_sold": 3200,
            "store_name": "Laskala Batik Official Shop"
        },
        {
            "id": 5,
            "name": "Couple Batik Terbaru motif Wibisana  Slimfit Kwalitas Premium  Katun  Puring Original Batik Prabuseno Lengan Lengan Panjang",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk5.png",
            "price": 750000,
            "rating": 4.9,
            "product_sold": 8,
            "store_name": "Batik Prabuseno Colection"
        },
        {
            "id": 6,
            "name": "Baju Batik Pria Seno Dyadmiko Hijau",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk6.png",
            "price": 159000,
            "rating": 4.8,
            "product_sold": 51,
            "store_name": "Blarak Official Shop"
        },
        {
            "id": 7,
            "name": "Handara Batik Pria Lengan Panjang Slim Fit Premium Tarumanegara Hitam HB-341",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk7.jpg",
            "price": 159000,
            "rating": 4.8,
            "product_sold": 52,
            "store_name": "Handara Batik Official Store"
        },
        {
            "id": 8,
            "name": "Laskala Premium Batik Batavia 2.0 K09A479",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk8.jpg",
            "price": 384000,
            "rating": 4.8,
            "product_sold": 1601,
            "store_name": "Laskala Batik Official Shop"
        },
        {
            "id": 9,
            "name": "KAIN BATIK PREMIUM Bahan Katun Motif Burung Cokrominoto",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk9.jpg",
            "price": 104000,
            "rating": 4.9,
            "product_sold": 2200,
            "store_name": "72 Batik"
        },
        {
            "id": 10,
            "name": "Hadinata Batik Pria Kemeja Pendek Damar Dahayu Daniar",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk10.png",
            "price": 355000,
            "rating": 4.8,
            "product_sold": 686,
            "store_name": "Hadinata Batik"
        },
        {
            "id": 11,
            "name": "Batik Adhirajasa lengan pendek lasem 6a abu-abu",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk50.png",
            "price": 61830,
            "rating": 5,
            "product_sold": 2,
            "store_name": "Pradawita Official Shop"
        },
        {
            "id": 12,
            "name": "Arjuna Weda Kemeja Batik Pria Motif Parang Camelia",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk49.png",
            "price": 129000,
            "rating": 5,
            "product_sold": 2,
            "store_name": "ArjunaWeda Official Shop"
        },
        {
            "id": 13,
            "name": "Dianputri - Kemeja batik pria lengan panjang motif BATIK DIANPUTRI - Batik kantor pria (Motif Cendrawasih)",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk48.png",
            "price": 129000,
            "rating": 5,
            "product_sold": 2,
            "store_name": "ArjunaWeda Official Shop"
        },
        {
            "id": 14,
            "name": "Arjuna Weda Kemeja Pria Batik Nitik Mahkota Raja",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk47.png",
            "price": 129000,
            "rating": 5,
            "product_sold": 2,
            "store_name": "ArjunaWeda Official Shop"
        },
        {
            "id": 15,
            "name": "Adikusuma Hem Pria Batik Kawung Prabu",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk46.png",
            "price": 75000,
            "rating": 5,
            "product_sold": 22,
            "store_name": "Adikusuma Official Shop"
        },
        {
            "id": 16,
            "name": "KAIN BATIK CAP POLENG/KAIN CAP MOTIF POLENG/KAIN POLENG/KAIN CAP SALUR/KAIN WONOGIREN POLENG SALUR",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk45.png",
            "price": 10000,
            "rating": 5,
            "product_sold": 16,
            "store_name": "omah_batik_solo "
        },
        {
            "id": 17,
            "name": "Blouse Batik Kawung",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk16.png",
            "price": 149000,
            "rating": 5,
            "product_sold": 4,
            "store_name": "Adikusuma"
        },
        {
            "id": 18,
            "name": "Tunik Cendrawasih",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk22.png",
            "price": 219000,
            "rating": 4,
            "product_sold": 50,
            "store_name": "Arjuna Weda"
        },
        {
            "id": 19,
            "name": "Aryadawi Batik Sogan Blouse",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk24.png",
            "price": 369000,
            "rating": 4.8,
            "product_sold": 100,
            "store_name": "DhieVine Batik"
        },
        {
            "id": 20,
            "name": "Men Shirt S/S Peksi Kawung Cream",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk29.png",
            "price": 711000,
            "rating": 5,
            "product_sold": 67,
            "store_name": "Bateek"
        },
        {
            "id": 21,
            "name": "Sinok Parang Cemeng Kebaya",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk30.png",
            "price": 369000,
            "rating": 4.7,
            "product_sold": 67,
            "store_name": "Bateek"
        },
        {
            "id": 22,
            "name": "Arjuna Weda Sackdress Batik Truntum",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/truntum_1.jpg",
            "price": 90000,
            "rating": 4.8,
            "product_sold": 28,
            "store_name": "Batik Arjuna Weda"
        },
        {
            "id": 23,
            "name": "Truntum Kemeja Batik Pria Lengan Panjang by Batik Asmara",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/truntum_2.jpg",
            "price": 130000,
            "rating": 5,
            "product_sold": 1,
            "store_name": "RPM Batik Clinic"
        },
        {
            "id": 24,
            "name": "Odza Classic Kemeja Batik Duri Truntum Cokelat",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/truntum_3.jpg",
            "price": 179000,
            "rating": 5,
            "product_sold": 70,
            "store_name": "Odza Classic"
        },
        {
            "id": 25,
            "name": "Batik Keris Hem Santai Lengan Pendek Lereng Tambal Keris",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/tambal_1.jpg",
            "price": 462000,
            "rating": 4.9,
            "product_sold": 90,
            "store_name": "Batik Keris"
        },
        {
            "id": 26,
            "name": "Batik Semar Dress batik Halia Tambal Bulat Merah Maroon",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/tambal_2.jpg",
            "price": 255000,
            "rating": 4.7,
            "product_sold": 10,
            "store_name": "Batik Semar"
        },
        {
            "id": 27,
            "name": "Arjuna Weda Blouse Batik Wanita Tambal 2 (repeat)",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/tambal_3.jpg",
            "price": 462000,
            "rating": 5,
            "product_sold": 5,
            "store_name": "Batik Arjuna Weda"
        },
        {
            "id": 28,
            "name": "Batik Sogan Solo Pria Lengan Panjang Katun Premium Lapis Furing Adem",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sogan_1.jpg",
            "price": 203500,
            "rating": 4.9,
            "product_sold": 250,
            "store_name": "Batik Fauzana"
        },
        {
            "id": 29,
            "name": "Baju Kemeja Lengan Panjang Batik Sogan Katun",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sogan_2.jpg",
            "price": 150000,
            "rating": 5,
            "product_sold": 7,
            "store_name": "My Ethnic Batik"
        },
        {
            "id": 30,
            "name": "Kemeja Batik Pria Lengan Panjang Naga Bulan Sogan By Batik Florist",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sogan_3.jpg",
            "price": 160000,
            "rating": 5,
            "product_sold": 7,
            "store_name": "Galeri Batik Ardev"
        },
        {
            "id": 31,
            "name": "DGM Kemeja Batik Pria Lengan Panjang Motif Simbut Daun Gold 2309",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/simbut_1.jpg",
            "price": 155000,
            "rating": 5,
            "product_sold": 27,
            "store_name": "DGM Fashion ID"
        },
        {
            "id": 32,
            "name": "DGM Kemeja Batik Pria Lengan Panjang Motif Simbut Daun Black 2310",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/simbut_2.jpg",
            "price": 165000,
            "rating": 4.7,
            "product_sold": 97,
            "store_name": "DGM Fashion ID"
        },
        {
            "id": 33,
            "name": "DGM Kemeja Batik Pria Lengan Panjang Motif Simbut Daun Black 2310",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/simbut_2.jpg",
            "price": 165000,
            "rating": 4.7,
            "product_sold": 97,
            "store_name": "DGM Fashion ID"
        },
        {
            "id": 34,
            "name": "DANAR HADI - Kemeja Batik PA Sekar Jagad  Merah",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sekar_jagad_1.jpg",
            "price": 315000,
            "rating": 4.8,
            "product_sold": 28,
            "store_name": "Danar Hadi Batik"
        },
        {
            "id": 35,
            "name": "DANAR HADI - Kemeja Batik PA Sekar Jagad Cokelat",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sekar_jagad_2.jpg",
            "price": 287000,
            "rating": 4.8,
            "product_sold": 26,
            "store_name": "Danar Hadi Batik"
        },
        {
            "id": 36,
            "name": "Kemeja Batik Pria Lengan Pendek Motif Sekar Jagad",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sekar_jagad_3.jpg",
            "price": 185000,
            "rating": 5,
            "product_sold": 13,
            "store_name": "Purnama Passion"
        },
        {
            "id": 37,
            "name": "Pring Sedapur - Kemeja Batik",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/sekar_jagad_3.jpg",
            "price": 245000,
            "rating": 5,
            "product_sold": 30,
            "store_name": "Krishan Batik"
        },
        {
            "id": 38,
            "name": "Pring Sedapur - Kemeja Batik",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/pring_sedapur_1.jpg",
            "price": 245000,
            "rating": 5,
            "product_sold": 30,
            "store_name": "Krishan Batik"
        },
        {
            "id": 39,
            "name": "Promo Undurjoyo - Blouse Batik Motif Pring Sedapur Murah",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/pring_sedapur_2.jpg",
            "price": 118800,
            "rating": 4.5,
            "product_sold": 45,
            "store_name": "Malek Shop"
        },
        {
            "id": 40,
            "name": "Batik Solo Kemeja Batik Pria Panjang Merak Poleng",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/pring_sedapur_2.jpg",
            "price": 142000,
            "rating": 4.5,
            "product_sold": 451,
            "store_name": "Batik Solo Amanah"
        },
        {
            "id": 41,
            "name": "BATIK MYRNA - Kemeja Batik Pria Lengan Panjang Baju Furing Parang",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/parang_1.jpg",
            "price": 165000,
            "rating": 4.9,
            "product_sold": 20,
            "store_name": "Toko Mirna"
        },
        {
            "id": 42,
            "name": "Kemeja Batik Lengan Pendek - Magani Nosweat - Bluegold Parang",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/parang_2.jpg",
            "price": 535000,
            "rating": 4.9,
            "product_sold": 20,
            "store_name": "Toko Mirna"
        },
        {
            "id": 43,
            "name": "ODZA Batik Regular Fit Kemeja Lengan Panjang Pria Nitik Jepara Hitam",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/nitik_1.jpg",
            "price": 189000,
            "rating": 4.9,
            "product_sold": 100,
            "store_name": "Odza Classic"
        },
        {
            "id": 44,
            "name": "Arjuna Weda Kemeja Batik Sawat Nitik Sebar - Hitam",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/nitik_2.jpg",
            "price": 89000,
            "rating": 4.9,
            "product_sold": 100,
            "store_name": "Batik Arjuna Weda"
        },
        {
            "id": 45,
            "name": "Arjuna Weda Kemeja Batik Sawat Nitik Sebar - Hitam",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/nitik_2.jpg",
            "price": 89000,
            "rating": 4.9,
            "product_sold": 100,
            "store_name": "Batik Arjuna Weda"
        },
        {
            "id": 46,
            "name": "BATIK TRUSMI Kemeja Batik Pria Batik Motif Mega Mendung Aramaki",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/mega_mendung_1.jpg",
            "price": 299000,
            "rating": 5,
            "product_sold": 1,
            "store_name": "BT Trusmi Cirebon"
        },
        {
            "id": 47,
            "name": "BATIK TRUSMI Kemeja Kerja Pria Motif Mega Mendung Hitam",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/mega_mendung_2.jpg",
            "price": 75000,
            "rating": 5,
            "product_sold": 28,
            "store_name": "BT Trusmi Cirebon"
        },
        {
            "id": 48,
            "name": "Kemeja Batik Bagus Pria Lengan Panjang Dobi Premium Lasem Hijau Pastel",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/lasem_1.jpg",
            "price": 384500,
            "rating": 5,
            "product_sold": 4,
            "store_name": "Batik Bagus Jakarta"
        },
        {
            "id": 49,
            "name": "Baju Batik Dobby Lasem | Batik Pria Modern Lengan panjang Lapis Furing",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/lasem_2.jpg",
            "price": 325000,
            "rating": 5,
            "product_sold": 11,
            "store_name": "Batik Fauzana"
        },
        {
            "id": 50,
            "name": "BATIK TRUSMI Atasan Wanita Blouse Batik Paris Kawung",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/kawung_1.jpg",
            "price": 195000,
            "rating": 5,
            "product_sold": 4,
            "store_name": "BT Trusmi Cirebon"
        },
        {
            "id": 51,
            "name": "KAWUNG SAGE BATIKSOLOAMANAH KEMEJA BATIK PRIA PANJANG PENDEK BERFURING",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/kawung_2.jpg",
            "price": 115000,
            "rating": 5,
            "product_sold": 11,
            "store_name": "Batik Solo Amanah"
        },
        {
            "id": 52,
            "name": "Kemeja Batik Satoe Pria - Motif Insang Borneo",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/insang_1.jpg",
            "price": 150000,
            "rating": 5,
            "product_sold": 1,
            "store_name": "Batik Satoe"
        },
        {
            "id": 53,
            "name": "SULTAN HADI / BATIK PRIA / BATIK COWOK LENGAN PANJANG / CENDRAWASIH",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/cendrawasih_1.jpg",
            "price": 75000,
            "rating": 5,
            "product_sold": 2,
            "store_name": "Sultan Hadi Batik"
        },
        {
            "id": 54,
            "name": "BATIK PREMIUM Motif PEKSI CENDRAWASIH Batik Pria Lengan Panjang ",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/cendrawasih_1.jpg",
            "price": 199000,
            "rating": 4.8,
            "product_sold": 30,
            "store_name": "Batik Slim"
        },
        {
            "id": 55,
            "name": "Kain Batik Geblek Renteng",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/geblek_renteng_1.jpg",
            "price": 159000,
            "rating": 5,
            "product_sold": 2,
            "store_name": "Djoeragan Batik"
        }
    ]
}
```

## Get detail product

```http
GET /product/details/:productid 
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productid` | `Integer` | required |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get detail Product success",
    "data": {
        "id": 1,
        "name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
        "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk1.png",
        "description": "BATIK TULIS ASLI \nBatik Tulis Khas Bakaran Juwana Pati \nMohon Tanyakan Stok Sebelum Order \nBahan : Katun Prima \nUkuran : -+215x115",
        "price": 135000,
        "product_sold": 214,
        "store_name": "Deny Batik"
    }
}
```

## Get all product in cart 

  ```http
GET /product/cart/:userid (require bearer token)
```
**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `userid` | `Integer` | required |

**Responses:**

```JSON
{
    "error": false,
    "emptyCart": false,
    "message": "Get all product in cart success",
    "totalQty": 3,
    "grandTotal": 1125000,
    "data": [
        {
            "id": 1,
            "name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk1.png",
            "price": 135000,
            "store_name": "Deny Batik",
            "total_qty": "1",
            "total_price": "135000"
        },
        {
            "id": 4,
            "name": "Laskala Batik Premium Slimfit Sandro 2.0 K08A331",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk4.png",
            "price": 495000,
            "store_name": "Laskala Batik Official Shop",
            "total_qty": "2",
            "total_price": "990000"
        }
    ]
}
```

## Add / reduce product to cart

```http
POST /product/cart
```
**Request Body:**
<br>Add Product</br>

```JSON
{
    "userId": 1,
    "productId": 1,
    "command": "add"
}
```
<br>Reduce Product</br>

```JSON
{
    "userId": 1,
    "productId": 1,
    "command": "reduce"
}
```

**Responses:**
<br></br>

Success add product for the first time
```JSON
{
    "error": false,
    "firstTimeAdded": true,
    "message": "Added product for the first time into cart"
}
```
Success increment product by 1
```JSON
{
    "error": false,
    "firstTimeAdded": true,
    "message": "Added product for the first time into cart"
}
```
Success delete product from cart
```JSON
{
    "error": false,
    "reduce": true,
    "message": "Delete one product in cart"
}
```
Success decrement product by 1
```JSON
{
    "error": false,
    "reduce": true,
    "message": "Product already in cart, decrement qty product"
}
```
</details>

## Get order

    ```http
GET /order/:userid (require bearer token)
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `userid` | `Integer` | `required` |

**Responses:**
<br></br>

Success get all order by userid
```JSON
{
    "error": false,
    "availableOrder": true,
    "message": "Get all order success",
    "data": [
        {
            "id": 4,
            "total_item": 1,
            "total_price": 419000,
            "createdAt": "2023-12-21T05:43:14.000Z",
            "other_item": 0,
            "product.id": 2,
            "product.name": "Hadinata Batik Pria Kemeja Panjang Furing Semi Sutra Zafeer Zahra",
            "product.url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk2.png"
        },
        {
            "id": 3,
            "total_item": 1,
            "total_price": 135000,
            "createdAt": "2023-12-21T04:21:31.000Z",
            "other_item": 0,
            "product.id": 1,
            "product.name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
            "product.url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk1.png"
        },
        {
            "id": 2,
            "total_item": 2,
            "total_price": 270000,
            "createdAt": "2023-12-21T03:30:01.000Z",
            "other_item": 0,
            "product.id": 1,
            "product.name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
            "product.url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk1.png"
        },
        {
            "id": 1,
            "total_item": 9,
            "total_price": 2037000,
            "createdAt": "2023-12-21T03:28:59.000Z",
            "other_item": 2,
            "product.id": 3,
            "product.name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
            "product.url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk3.png"
        }
    ]
}
```
    ```http
POST /order/register
```



</details>

