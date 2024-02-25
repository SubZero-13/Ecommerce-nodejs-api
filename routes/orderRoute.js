const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const validateToken = require("../middleware/validateTokenHandler.js");
const cors = require('cors');

orderRouter.use(cors());

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Operations related to orders
 */

/**
 * @swagger
 * /api/v1/order/place:
 *   post:
 *     summary: Place an order
 *     description: Place a new order with the specified products for the authenticated user.
 *     tags: [Order]
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
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Order placed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating that the order was placed successfully.
 *                 orderId:
 *                   type: integer
 *                   description: The ID of the newly created order.
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the specified product was not found.
 *       500:
 *         description: Failed to place order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the order placement failed.
 */

/**
 * @swagger
 * /api/v1/order/history/{userId}:
 *   get:
 *     summary: Get order history
 *     description: Retrieve the order history for the specified user.
 *     tags: [Order]
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
 *         description: Order history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Failed to fetch order history
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the order history retrieval failed.
 */

/**
 * @swagger
 * /api/v1/order/details/{orderId}:
 *   get:
 *     summary: Get order details
 *     description: Retrieve the details of the specified order.
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         description: ID of the order
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the specified order was not found.
 *       500:
 *         description: Failed to fetch order details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the order details retrieval failed.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         order_id:
 *           type: integer
 *           description: The ID of the order.
 *         total_amount:
 *           type: number
 *           description: The total amount of the order.
 *         created_at:
 *           type: string
 *           format: date-time
 *         order_items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *       example:
 *         order_id: 1
 *         total_amount: 100.00
 *         created_at: '2024-02-25T00:00:00.000Z'
 *         order_items:
 *           - order_item_id: 1
 *             quantity: 2
 *             product_id: 1
 *             createdAt: '2024-02-25T00:00:00.000Z'
 *             updatedAt: '2024-02-25T00:00:00.000Z'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         order_item_id:
 *           type: integer
 *           description: The ID of the order item.
 *         quantity:
 *           type: integer
 *           description: The quantity of the product in the order item.
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         order_item_id: 1
 *         quantity: 2
 *         createdAt: '2024-02-25T00:00:00.000Z'
 *         updatedAt: '2024-02-25T00:00:00.000Z'
 */


orderRouter.post("/order/place", validateToken, orderController.placeOrder);
orderRouter.get("/order/history/:userId", validateToken, orderController.getOrderHistory);
orderRouter.get("/order/details/:orderId", validateToken, orderController.getOrderDetails);

module.exports = orderRouter;
