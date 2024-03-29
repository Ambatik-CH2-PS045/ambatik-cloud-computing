# Ambatik Cloud Computing Documentation
Dive in, this documentation will covers:
- [how to running this repo on your machine](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/#getting-started)
- [tech stack](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/#tech-stack)
- [architecture](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/#application-architecture)
- [database ERD](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/#application-entity-relationship-diagram)
- [API docs](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/#api).

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

## Tech Stack
[ ![](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/tech_stack.jpg) ](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/tech_stack.jpg)

## Application Architecture
[ ![](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/application_architecture.jpg) ](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/application_architecture.jpg)

Our app has two backend services:
1. Node JS, for interaction with the mysql database so that any changes, reads, updates, or deletes of data (CRUD) will be done here.
2. Flask, for classification of batik images will be done here.

## Application Entity Relationship Diagram
[ ![](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/ERD_Ambatik.png) ](https://github.com/Ambatik-CH2-PS045/ambatik-cloud-computing/blob/main/assets/ERD_Ambatik.png)

## API
The following is documentation for the Ambatik application API, we also provide API documentation on [Postman](https://documenter.getpostman.com/view/25070708/2s9YeBfETF). 

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
  
## User register

```http
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

## User login

```http
POST /users/login
```
**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Request Body:**

```JSON
{
    "error": true,
    "message": "Please regist first"
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
POST /users/upload (require bearer token)
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
POST /product/cart (require bearer token)
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

<details>
  <summary>Order</summary>

## Get all order by specified user id

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

## Get order details

  ```http
GET /order/details/:id/:userid (require bearer token)
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | `Integer` | `required` |
| `userid` | `Integer` | `required` |

**Response**

```JSON
{
    "error": false,
    "message": "Get detail detail order",
    "data": [
        {
            "id": 1,
            "total_item": 9,
            "total_price": 2037000,
            "products": [
                {
                    "name": "KAIN BATIK TULIS ASLI BAKARAN PATI",
                    "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk1.png",
                    "price": 135000,
                    "store_name": "Deny Batik",
                    "detail_order": {
                        "each_qty": 4
                    }
                },
                {
                    "name": "Hadinata Batik Pria Kemeja Panjang Furing Semi Sutra Zafeer Zahra",
                    "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk2.png",
                    "price": 419000,
                    "store_name": "Hadinata Batik Official Shop",
                    "detail_order": {
                        "each_qty": 3
                    }
                },
                {
                    "name": "Batik Pria WAYANG SOGAN Full Furing Bahan Katun Halus High Quality",
                    "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk3.png",
                    "price": 120000,
                    "store_name": "Batik Dewa Ruci",
                    "detail_order": {
                        "each_qty": 2
                    }
                }
            ]
        }
    ]
}
```

## Checkout

  ```http
POST /article/like (require bearer token)
```

**Request Body:**

```JSON
{
    "totalqty": 1,
    "grandtotal": 935000,
    "userId": 1,
    "eachqtys": [1],
    "eachprices": [935000],
    "productIds": [1]
}
```

**Response**

Checkout
```JSON
{
    "error": false,
    "checkout": true,
    "message": "Successfully checkout product & remove product from cart"
}
```
</details>

<details>
  <summary>Quiz</summary>
  
  ## Get all quiz module

  ```http
GET /quiz/list/:userid
```

**Parameters:**
| Parameter | Type | Description |
|---|---|---|
| `userid` | `Integer` | `optional` |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get all quiz type",
    "data": [
        {
            "id": 1,
            "type": "Quiz 1",
            "quiz_histories": []
        },
        {
            "id": 2,
            "type": "Quiz 2",
            "quiz_histories": []
        },
        {
            "id": 3,
            "type": "Quiz 3",
            "quiz_histories": []
        }
    ]
}
```

 ## Get quiz leaderboard

 ```http
 GET /quiz/leaderboard
 ```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get user leaderboard",
    "data": [
        {
            "name": "Austin Lieandro",
            "point": 200,
            "url_profile": "https://storage.googleapis.com/ambatik_bucket/user_photo/21-12-2023-3-23-40IMG_20231221_111712-1703132232312_7691825550391038764.jpg"
        },
        {
            "name": "adam",
            "point": 200,
            "url_profile": "https://storage.googleapis.com/ambatik_bucket/user_photo/default-photo-profile.png"
        },
        {
            "name": "Gek Ari",
            "point": 100,
            "url_profile": "https://storage.googleapis.com/ambatik_bucket/user_photo/21-12-2023-8-43-44Python-logo-notext.svg.png"
        },
        {
            "name": "john",
            "point": 0,
            "url_profile": "https://static9.depositphotos.com/1074452/1184/i/450/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg"
        },
    ]
}
```
## Submit quiz

```http
POST /quiz/submit (require bearer token)
```

**Request Body:**

```JSON
{
    "userid": 1,
    "quizid": 1,
    "questionIds": [1,2,3,4,5],
    "answerIds": [2,7,10,14,19]
}
```

**Responses:**

```JSON
{
    "error": false,
    "message": "Submitted quiz and get result",
    "data": [
        {
            "summary": {
                "firstAttempt": true,
                "previousHighest": null,
                "totalCorrect": 5,
                "totalWrong": 0,
                "accumulatePoint": 500
            }
        }
    ]
}
```

</details>

<details>
  <summary>Question</summary>
  
  ## Get question based on quiz module

  ```http
GET /quiz/:quizId/question/:questionid
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `quizid` | `Integer` | `required` |
| `questionid` | `Integer` | `required` |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get question",
    "data": {
        "id": 1,
        "question": "Batik ini berasal dari Daerah Istimewa Yogyakarta, makna batik ini ialah cinta yang tumbuh kembali. Batik ini biasanya dipakai oleh orang tua pengantin pada hari pernikahan. Batik yang dimaksud adalah ….",
        "answers": [
            {
                "id": 1,
                "answer": "Batik Tambal",
                "questionId": 1
            },
            {
                "id": 2,
                "answer": "Batik Truntum",
                "questionId": 1
            },
            {
                "id": 3,
                "answer": "Batik Sogan",
                "questionId": 1
            },
            {
                "id": 4,
                "answer": "Batik Simbut",
                "questionId": 1
            }
        ]
    }
}
```



</details>

<details>
  <summary>Batik</summary>

  ## Get question based on quiz module

```http
GET /batik/
```  

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `-` | `-` | `-` |

**Responses:**
```JSON
{
    "error": false,
    "message": "Get all batik success",
    "data": [
        {
            "id": 1,
            "name": "Batik Truntum",
            "url_batik": "https://storage.googleapis.com/ambatik_bucket/batik_photo/1_truntum.jpg",
            "origin": "Daerah Istimewa Yogyakarta"
        },
        {
            "id": 2,
            "name": "Batik Tambal",
            "url_batik": "https://storage.googleapis.com/ambatik_bucket/batik_photo/2_tambal.jpg",
            "origin": "Daerah Istimewa Yogyakarta"
        },
        {
            "id": 3,
            "name": "Batik Sogan",
            "url_batik": "https://storage.googleapis.com/ambatik_bucket/batik_photo/3_sogan.jpg",
            "origin": "Yogyakarta dan Solo"
        },
    ]
}
```

## Get batik details

```http
GET /batik/:id
```

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | `Integer` | `Required` |

**Responses:**
```JSON
{
    "error": false,
    "message": "Get selected batik",
    "data": {
        "name": "Batik Sogan",
        "url_batik": "https://storage.googleapis.com/ambatik_bucket/batik_photo/3_sogan.jpg",
        "origin": "Yogyakarta dan Solo",
        "meaning": "Batik Sogan adalah salah satu jenis batik klasik. Nama Sogan diambil dari pohon soga yang digunakan dalam proses pembuatan batik ini. Batik Sogan sendiri berasal dari Yogyakarta dan Solo. Namun, kedua batiknya tidak mirip. Perbedaan batiknya terletak di warna. Umumnya batik Sogan Yogya berwarna coklat tua, hitam dan putih. Sementara batik Sogan Solo didominasi warna orange muda dan coklat.",
        "making_process": "- Pengkhetelan: Membuat pola atau motif batik pada kertas \n- Menyorek: Memindahkan pola dari kertas ke kain \n- Menyanting: Melekatkan malam atau jaringan pada kain untuk menjaga pola \n- Menembok: Menyusun kain yang telah diperkhet dan disanting dengan lain \n- Nyelup: Melakukan proses nyelup untuk menjaga pola pada kain \n- Pewarnaan: Menggunakan cara mbabar untuk memperawatkan bahan dengan lain selama proses pembatikan \n- Pembersihan: Menyaring dan membersihkan kain yang telah melalui proses pembatikan",
        "usage_purpose": "Dulunya, batik ini dipakai raja-raja di Jawa khususnya keraton kesultanan Solo. Namun, sekarang dapat dipakai oleh siapa saja, baik warga keraton maupun orang biasa."
    },
    "products": [
        {
            "id": 3,
            "name": "Batik Pria WAYANG SOGAN Full Furing Bahan Katun Halus High Quality",
            "url_product": "https://storage.googleapis.com/ambatik_bucket/produk_photo/produk3.png",
            "price": 120000,
            "rating": 4.7,
            "product_sold": 461,
            "store_name": "Batik Dewa Ruci"
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
        }
    ]
}
```

## Prediction and upload batik

```http
POST /batik/predict (require bearer token)
```

**Request Form Data:**

| Key | Type | Value |
|---|---|---|
| `file` | `file` | `file-name-example.jpg` |

**Responses:**

```JSON
{
    "error": false,
    "message": "Get prediction batik",
    "batikName": "pring sedapur",
    "accuracy": 91.72,
    "data": {
        "id": 6,
        "name": "Batik Pring Sedapur",
        "url_batik": "https://storage.googleapis.com/ambatik_bucket/batik_photo/6_pring_sedapur.jpg",
        "origin": "Sidomukti, Jawa Timur",
        "meaning": "Pring Sedapur merupakan motif batik yang terkenal unik dan indah. Pasalnya, motif batik khas Jawa Timur ini memadukan corak pohon bambu, dengan unsur-unsur alam. Menjadikan tanaman bambu sebagai objek utama, batik motif Pring Sedapur melambangkan persatuan dan kekuatan.",
        "making_process": "Untuk mengembangkan produk batik Pring Sedapur, dapat dilakukan dengan menciptakan inovasi motif-motif baru yang lebih menarik dan juga campur \nProses pembuatan batik pada umumnya melibatkan beberapa tahap, seperti membuat pola, menggambar pola pada kain, mengaplikasikan malam pada bagian-bagian tertentu pada kain, pewarnaan, dan pembersihan \nSetiap motif batik memiliki ciri khas dan teknik pembuatan yang berbeda-beda, tergantung pada daerah asal dan tradisi yang berkembang di masyarakat setempat",
        "usage_purpose": "Motif batik khas Jawa Timur ini memadukan corak pohon bambu, dengan unsur-unsur alam. Menjadikan tanaman bambu sebagai objek utama, batik motif Pring Sedapur melambangkan persatuan dan kekuatan. Dengan kata lain, motif batik ini mengajarkan manusia untuk hidup bersama dan rukun satu sama lain."
    },
    "products": [
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
        }
    ]
}
```

## Personalization
```http
POST /batik/personalization
```

**Request Body:**
```JSON
{
    "userAnswers": [2,2,2]
}
```

**Responses:**
```JSON
{
    "error": false,
    "message": "Get selected batik",
    "data": [
        {
            "id": 3,
            "name": "Sogan",
            "url_image": "https://storage.googleapis.com/ambatik_bucket/batik_photo/3_sogan.jpg"
        },
        {
            "id": 9,
            "name": "Nitik",
            "url_image": "https://storage.googleapis.com/ambatik_bucket/batik_photo/9_nitik.jpg"
        },
        {
            "id": 12,
            "name": "Kawung",
            "url_image": "https://storage.googleapis.com/ambatik_bucket/batik_photo/12_kawung.png"
        }
    ]
}
```

</details>

