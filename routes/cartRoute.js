const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController");
const validateToken = require("../middleware/validateTokenHandler.js");
const cors = require('cors');

cartRouter.use(cors());

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Operations related to the shopping cart
 */

/**
 * @swagger
 * /api/v1/cart/add:
 *   post:
 *     summary: Add a product to the cart
 *     description: Add a product to the shopping cart.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product added to cart successfully
 *       404:
 *         description: Cart or product not found
 *       500:
 *         description: Failed to add product to cart
 */

/**
 * @swagger
 * /api/v1/cart/view/{userId}:
 *   get:
 *     summary: View cart details
 *     description: Retrieve the details of the shopping cart for a specific user.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart details retrieved successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Failed to fetch cart
 */

/**
 * @swagger
 * /api/v1/cart/update/{cartItemId}:
 *   put:
 *     summary: Update cart item quantity
 *     description: Update the quantity of a specific item in the shopping cart.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         required: true
 *         description: ID of the cart item
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart item quantity updated successfully
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Failed to update cart item quantity
 */

/**
 * @swagger
 * /api/v1/cart/remove/{cartItemId}:
 *   delete:
 *     summary: Remove item from cart
 *     description: Remove a specific item from the shopping cart.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         required: true
 *         description: ID of the cart item
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart item removed successfully
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Failed to remove cart item
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         cart_id:
 *           type: integer
 *         created_at:
 *           type: string
 *           format: date-time
 *     CartItem:
 *       type: object
 *       properties:
 *         cart_item_id:
 *           type: integer
 *         quantity:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */


cartRouter.post('/cart/add', validateToken, cartController.addToCart);
cartRouter.get('/cart/view/:userId', validateToken, cartController.viewCart);
cartRouter.put('/cart/update/:cartItemId', validateToken, cartController.updateCart);
cartRouter.delete('/cart/remove/:cartItemId', validateToken, cartController.deleteItemfromCart);
module.exports = cartRouter;