const asyncHandler = require("express-async-handler");

const {Cart, CartItem, Product} = require("../models/index");

const addToCart = asyncHandler(async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await Cart.findOne({ where: { user_id: userId } });
    if (!cart) {
      res.status(404);
      throw new Error("Cart not found");
    }
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    await CartItem.create({ cart_id: cart.id, product_id: productId, quantity });
    res.status(201).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500);
    throw new Error("Failed to add product to cart");
  }
});

const viewCart = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({
      where: { user_id: userId },
      include: [{ model: CartItem, include: Product }],
    });
    if (!cart) {
      res.status(404);
      throw new Error("Cart not found");
    }
    res.json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500);
    throw new Error("Failed to fetch cart");
  }
});

const updateCart = asyncHandler(async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItemId = req.params.cartItemId;
    const cartItem = await CartItem.findByPk(cartItemId);
    if (!cartItem) {
      res.status(404);
      throw new Error("Cart item not found");
    }
    const updatedCart = await cartItem.update({ quantity });
    res.json({
      message: "Cart item quantity updated successfully",
      updatedCart,
    });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    res.status(500);
    throw new Error("Failed to update cart item quantity");
  }
});

const deleteItemfromCart = asyncHandler(async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    const cartItem = await CartItem.findByPk(cartItemId);
    if (!cartItem) {
      res.status(404);
      throw new Error("Cart item not found");
    }
    await cartItem.destroy();
    res.json({ message: "Cart item removed successfully" });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500);
    throw new Error("Failed to remove cart item");
  }
});

module.exports = {
  addToCart,
  viewCart,
  updateCart,
  deleteItemfromCart,
};
