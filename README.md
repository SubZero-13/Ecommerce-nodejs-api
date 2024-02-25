# E-commerce API with Node.js

This repository contains the code for an E-commerce API built with Node.js. The API supports various operations such as product and category listing, product details, cart management, order processing, user authentication using JSON Web Tokens (JWT), error handling, and rate limiting (optional).

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [API Endpoints](#api-endpoints)
- [Database Integration](#database-integration)
- [User Authentication](#user-authentication)
- [Error Handling](#error-handling)
- [Documentation](#documentation)
- [Rate Limiting](#rate-limiting)
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Important Design Decisions](#important-design-decisions)
- [Contributing](#contributing)
- [License](#license)

## Overview

The goal of this project is to create a robust and scalable API set to support various e-commerce operations. The API allows users to perform actions such as browsing categories and products, managing their cart, placing orders, and viewing order history.

## Requirements

The requirements for this project are outlined as follows:

- Create API endpoints for category and product listing, product details, cart management, order placement, order history, user registration, and login.
- Utilize any SQL database, preferably Postgres, to manage product/category data, user cart information, and order details.
- Implement user authentication using JWT, allowing users to register, log in, and obtain a token for API authentication.
- Ensure appropriate error handling and return meaningful error messages and status codes when necessary.
- Create documentation for API endpoints, including details about functionality, expected input, and output. Swagger documentation is preferred.
- Optional: Implement API rate limiting to prevent abuse and maintain server stability.

## API Endpoints

The API endpoints include:

- **Category Listing:** Retrieve a list of categories.
- **Product Listing:** Retrieve a list of products based on category ID.
- **Product Details:** Fetch detailed information about a specific product.
- **Cart Management:** Allow users to add products to their cart, view the cart, update quantities, and remove items.
- **Order Placement:** Handle order placement with products from the user's cart.
- **Order History:** Fetch the order history for authenticated users.
- **Order Details:** Retrieve detailed information about a specific order.
- **User Authentication:** Register and login users to obtain authentication tokens.

## Database Integration

The API interacts with an SQL database, preferably Postgres, to perform CRUD operations on products, cart items, and orders.

## User Authentication

User authentication is implemented using JSON Web Tokens (JWT). Users can register, log in, and obtain a token to authenticate API requests. An authentication middleware secures sensitive endpoints, allowing only authenticated users to access them.

## Error Handling

The API ensures appropriate error handling by returning meaningful error messages and status codes when necessary. This helps improve the user experience and provides clarity in case of issues.

## Documentation

Documentation for the API endpoints is provided, including details about functionality, expected input, and output. Swagger documentation is preferred for ease of understanding and integration.

## Rate Limiting

Optional rate limiting can be implemented to prevent abuse and maintain server stability. This helps ensure fair usage of the API resources and prevents overload on the server.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up the database and configure the database connection in the `.env` file.
4. Run migrations and seed data if necessary: `npm run migrate` and `npm run seed`
5. Start the server: `npm start`

## API Documentation

The API documentation can be found in the Swagger documentation provided in the `swagger.yaml` file. This documentation includes details about each endpoint, such as the request parameters, response format, and examples.

## Important Design Decisions

During development, several design decisions were made to ensure the scalability, security, and performance of the API. These decisions are documented in the codebase and may include choices related to database schema, authentication mechanisms, error handling strategies, and more.

## Contributing

Contributions to this project are welcome. You can contribute by reporting issues, suggesting improvements, or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes. 
