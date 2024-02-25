const asyncHandler = require('express-async-handler');
const {Product, Category} = require('../models/index');
const getAllProductByCategory = asyncHandler(async(req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Product.findAll({ where: { cat_id : categoryId } });
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500);
        throw new Error('Failed to fetch products');
    }
});

const getProductById = asyncHandler(async(req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500);
        throw new Error('Failed to fetch product details');
    }
});

module.exports = {
    getAllProductByCategory,
    getProductById
};
