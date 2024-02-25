# E-commerce API with Node.js

Welcome to the E-commerce API with Node.js! This project provides a robust RESTful API designed to support various e-commerce operations, including product and category listing, product details, cart management, order processing, and user authentication using JSON Web Tokens (JWT). The API interacts with a PostgreSQL database to perform CRUD operations on products, cart items, and orders.

## Table of Contents

1. [Getting Started](#getting-started)
2. [API Documentation](#api-documentation)
3. [Important Design Decisions](#important-design-decisions)
4. [Contributing](#contributing)
5. [License](#license)

## Getting Started

To get started with the E-commerce API, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ecommerce-api-nodejs.git
   ```

2. **Install dependencies:**
   ```bash
   cd ecommerce-api-nodejs
   npm install
   ```

3. **Set up the database and configure the database connection in the .env file.**

4. **Run migrations and seed data if necessary:**
   ```bash
   npm run migrate
   npm run seed
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

## API Documentation

The API documentation can be found in the Swagger documentation provided in the `swagger.yaml` file. This documentation includes details about each endpoint, such as the request parameters, response format, and examples.

## Important Design Decisions

During development, several design decisions were made to ensure the scalability, security, and performance of the API. These decisions are documented in the codebase and may include choices related to database schema, authentication mechanisms, error handling strategies, and more.

## Contributing

Contributions to this project are welcome. You can contribute by reporting issues, suggesting improvements, or submitting pull requests.

## License

This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.
