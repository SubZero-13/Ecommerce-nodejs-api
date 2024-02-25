// orderRoutes.js

const orderSwaggerDoc = {
    '/order/place': {
      post: {
        summary: 'Place an order',
        description: 'Place an order for products in the shopping cart.',
        // Other route-specific documentation...
      }
    },
    '/order/history/{userId}': {
      get: {
        summary: 'Get order history',
        description: 'Retrieve the order history for a specific user.',
        // Other route-specific documentation...
      }
    },
    // Other routes...
  };
  
  module.exports = {
    orderSwaggerDoc
  };
  