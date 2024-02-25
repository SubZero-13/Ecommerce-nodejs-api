const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const cors = require('cors');

productRouter.use(cors());

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operations related to products
 */

/**
 * @swagger
 * /api/v1/product/{categoryId}:
 *   get:
 *     summary: Get all products by category ID
 *     description: Retrieve all products belonging to a specific category.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         description: ID of the category
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of products belonging to the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Category not found or no products found for the category
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/product/details/{productId}:
 *   get:
 *     summary: Get product details by ID
 *     description: Retrieve details of a specific product by its ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

productRouter.get("/product/:categoryId", productController.getAllProductByCategory);
productRouter.get("/product/details/:productId", productController.getProductById);
module.exports = productRouter;

