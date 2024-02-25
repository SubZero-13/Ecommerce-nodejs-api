const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler.js");
const cors = require("cors");

userRouter.use(cors());

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to user management
 */

/**
 * @swagger
 * /api/v1/user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, and password.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *                 example: john_doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user.
 *                 example: mySecurePassword123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, missing fields
 *       403:
 *         description: User already registered
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Log in user
 *     description: Log in user with email and password.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user.
 *                 example: mySecurePassword123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Access token to authenticate further requests.
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiam9obi5leGFtcGxlQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NjI5MzQwMjgsImV4cCI6MTY2MjkzNzYyOH0.YY6P9O3IlU-oc0KJlA_5pXV6FZI97IpIm3vNxEu4t-w
 *                 name:
 *                   type: string
 *                   description: The name of the user.
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the user.
 *                   example: john@example.com
 *       400:
 *         description: Bad request, missing fields
 *       401:
 *         description: Email or password is not valid
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserInput:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user.
 *       example:
 *         username: "john_doe"
 *         email: "john@example.com"
 *         password: "password123"
 *     LoginUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user.
 *       example:
 *         email: "john@example.com"
 *         password: "password123"
 *     LoginUserOutput:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *           description: The JWT access token for the user.
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *       example:
 *         accessToken: "jwt_access_token"
 *         name: "John Doe"
 *         email: "john@example.com"
 */

userRouter.post("/user/register", userController.registerUser);
userRouter.post("/user/login", userController.loginUser);

module.exports = userRouter;
