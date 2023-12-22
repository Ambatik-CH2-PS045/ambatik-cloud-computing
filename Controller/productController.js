const { where } = require('sequelize');
const models = require('../models/');
const product = models.product;
const sequelize = models.sequelize;
const cart = models.cart;

const getAllProduct = async(req, res) => {
    try{
        const allProduct = await product.findAll({
            attributes: ['id', 'name', 'url_product', 'price', 'rating', 'product_sold', 'store_name']
        });
        res.status(200).json({
            error: false,
            message: 'Get all product success',
            data: allProduct
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Product',
            serverMessage: error.message
            })
        }
    }

const getSelectedProduct = async(req, res) => {
    try{
        const selectedProduct = await product.findOne({
            attributes: [
                'id', 
                'name', 
                'url_product', 
                'description', 
                'price', 
                'product_sold', 
                'store_name'
            ], 
            where: {
                id: req.params.productid, 
            },
        });

        res.status(200).json({
            error: false,
            // liked: status,
            message: 'Get detail Product success',
            data: selectedProduct
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get Selected Details Product',
            serverMessage: error.message
        })
    }
}

const getAllProductInCart = async(req, res) => {
    try{

        // const allProduct = await sequelize.query(
        // `SELECT
        //     p.id,
        //     p.name,
        //     p.url_product,
        //     p.price,
        //     p.store_name,
        //     SUM(c.qty_product) AS total_qty,
        //     SUM(c.qty_product * p.price) AS total_price
        // FROM products p
        // JOIN carts c ON p.id = c.productId
        // WHERE c.userId = :userId
        // GROUP BY p.id`,
        // {
        //     type: sequelize.QueryTypes.SELECT,
        //     replacements: {
        //     userId: req.params.userid,
        //     },
        // },
        // );

        // const totalQty = await cart.sum('qty_product', {
        //     where: {
        //         userId: req.params.userid
        //     }
        // });

        // let grandTotal = 0;
        // for (const product of allProduct) {
        //     grandTotal += product.total_qty * product.total_price;
        // }

        const allProduct = await product.findAll({
            attributes: [
                    'id',
                    'name',
                    'url_product',
                    'price',
                    'store_name',
                    [
                        sequelize.literal('SUM(qty_product)'),
                        'total_qty',
                    ],
                    [
                        sequelize.literal('SUM(qty_product * price)'),
                        'total_price',
                    ],
            ],
            include: [
                    {
                        model: cart,
                        attributes: [],
                        where: { userId: req.params.userid },
                    },
                ],
            group: ['product.id'],
        });

        // Calculate grand total
        let grandTotal = 0;
        let totalQty = 0;

        if (allProduct && allProduct.length > 0) {
            for (const product of allProduct) {
                // Ensure total_qty and total_price are treated as numbers
                const qty = parseFloat(product.get('total_qty')) || 0;
                const price = parseFloat(product.get('price')) || 0;

                totalQty += qty;
                grandTotal += qty * price;
            }
        res.status(200).json({
            error: false,
            emptyCart: false,
            message: 'Get all product in cart success',
            totalQty: totalQty,
            grandTotal: grandTotal,
            data: allProduct
        })
        }
        else{
            res.status(200).json({
                error: false,
                emptyCart: true,
                message: 'There are no product in cart',
                totalQty: totalQty,
                grandTotal: grandTotal,
                data: allProduct
            })
        }
        
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Product in Cart',
            serverMessage: error.message
        })
    }
}

const addProductToCart = async(req, res) => {

    try{
        const selectedProduct = await product.findOne(
            {
                where:
                {
                    id: req.body.productId
                }
            }
        );
        const selectedCart = await cart.findOne(
            {
                where: 
                {
                    productId: selectedProduct.id,
                    userId: req.body.userId
                }
            }
        );
        const command = req.body.command;
        if(command == "add"){
            if(selectedCart){
            selectedCart.increment('qty_product');
            res.status(200).json({
                error: false,
                firstTimeAdded: false,
                message: 'Product already in cart, increment qty product',

            })
            }else{
                await cart.create({
                    qty_product: 1,
                    userId: req.body.userId,
                    productId: req.body.productId,
                })
                res.status(200).json({
                    error: false,
                    firstTimeAdded: true,
                    message: 'Added product for the first time into cart',
                })
            }
        }
        else if(command == "reduce"){
            if(selectedCart.qty_product > 1){
                selectedCart.decrement('qty_product');
                res.status(200).json({
                    error: false,
                    reduce: true,
                    message: 'Product already in cart, decrement qty product',
                })
            }
            else if(selectedCart.qty_product == 1){
                await cart.destroy({
                    where: {
                        productId: req.body.productId,
                        userId: req.body.userId
                    },
                });
                res.status(200).json({
                    error: false,
                    reduce: true,
                    message: 'Delete one product in cart',
                })
            }
        }
        
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Add Product to Cart',
            serverMessage: error.message
        })
    }
}

const deleteProductFromCart = async(req, res) => {
    try{
        await cart.destroy({
            where: {
                productId: req.body.productIds,
                userId: req.body.userId
            },
        });
        res.status(200).json({
            error: false,
            deleted: true,
            message: 'Successfully delete product from cart',
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Delete Product in Cart',
            serverMessage: error.message
        })
    }
}

module.exports = {
    getAllProduct,
    getSelectedProduct,
    getAllProductInCart,
    addProductToCart,
    deleteProductFromCart
}