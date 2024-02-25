const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API',
      version: '1.0.0',
      description: "The E-commerce API provides endpoints to manage various aspects of an online store, including products, categories, users, shopping carts, orders, and more. It allows developers to interact with the store's data programmatically, enabling functionalities such as browsing products, adding items to the cart, placing orders, and managing user accounts. With this API, developers can build custom front-end applications, mobile apps, and integrations with other systems to create seamless shopping experiences for customers.",
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs),
};
