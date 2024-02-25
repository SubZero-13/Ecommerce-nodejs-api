const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const cors = require('cors');

categoryRouter.use(cors());
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Operations related to categories
 */

/**
 * @swagger
 * /api/v1/category:
 *   get:
 *     summary: Get category list
 *     description: Retrieve the list of categories.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Category list retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Failed to fetch categories
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to fetch categories
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         category_id:
 *           type: integer
 *           description: The ID of the category.
 *         name:
 *           type: string
 *           description: The name of the category.
 *         description:
 *           type: string
 *           description: The description of the category.
 *       example:
 *         category_id: 1
 *         name: "Electronics"
 *         description: "Category for electronic products"
 */


categoryRouter.get('/category', categoryController.getCategoryList);

module.exports = categoryRouter;