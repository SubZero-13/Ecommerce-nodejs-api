const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/index");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(403).json({ error: "User already registered!" });
      return;
    }
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500);
    throw new Error("Internal server error");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: hashedPassword });
  if (newUser) {
    res.status(201).json({ id: newUser.id, username: newUser.username, email: newUser.email });
  } else {
    res.status(400);
    throw new Error("Failed to register user");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401);
      throw new Error('Email or password is not valid');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401);
      throw new Error('Email or password is not valid');
    }

    const accessToken = jwt.sign(
      { user: { email: user.email } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      accessToken,
      name: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500);
    throw new Error('Internal server error');
  }
});

module.exports = {
  registerUser,
  loginUser
};
