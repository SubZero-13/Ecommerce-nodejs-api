const asyncHandler = require("express-async-handler");
const { Order, OrderItem, Product} = require("../models/index");

const placeOrder = asyncHandler(async (req, res) => {
  try {
    const { userId, products } = req.body;
    const order = await Order.create({ user_id: userId, total_amount: 0 });
    let totalAmount = 0;
    for (const { productId, quantity } of products) {
      const product = await Product.findByPk(productId);
      if (!product) {
        res.status(404);
        throw new Error(`Product with ID ${productId} not found`);
      }
      await OrderItem.create({ order_id: order.order_id, product_id: productId, quantity });
      totalAmount += product.price * quantity;
    }
    await order.update({ total_amount: totalAmount });
    res.status(201).json({ message: "Order placed successfully", orderId: order.id });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500);
    throw new Error("Failed to place order");
  }
});

const getOrderHistory = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.findAll({
      where: { user_id: userId },
      include: { model: OrderItem, include: Product },
    });
    res.json(orders);
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500);
    throw new Error("Failed to fetch order history");
  }
});

const getOrderDetails = asyncHandler(async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByPk(orderId, {
      include: { model: OrderItem, include: Product },
    });
    if (!order) {
      res.status(404);
      throw new Error("Order not found");
    }
    res.json(order);
  } catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500);
    throw new Error("Failed to fetch order details");
  }
});

module.exports = {
  placeOrder,
  getOrderHistory,
  getOrderDetails
};
