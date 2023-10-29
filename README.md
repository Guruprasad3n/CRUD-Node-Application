# Product and Review Management System

## Introduction

The Product and Review Management System is a Node.js application with MongoDB integration that allows users to manage products and their associated reviews. This documentation provides an overview of the application, its features, technical requirements, and instructions for setting up and running the project.

## Features

### Product Model

- **Attributes:** Name, Price, cDate, uDate, _id.
- Functionality to add, read all, read by ID, update, and delete products.

### Review Model

- **Attributes:** userId, description, cDate, uDate, _id.
- Functionality to add and delete reviews.

### API Endpoints

Create RESTful API endpoints for the following operations:

- Add a Product (POST /api/products)
- Read All Products (GET /api/products)
- Read Product by ID (GET /api/products/:id)
- Update a Product (PUT /api/products/:id)
- Delete a Product (DELETE /api/products/:id)
- Create a Review for a Product (POST /api/products/:productId/reviews)
- Delete a Review (DELETE /api/products/:productId/reviews/:reviewId)
- Virtual Population of Reviews for a Product (GET /api/products/:productId/reviews)

## Technical Requirements

### Node.js Backend

- Use Node.js to create a backend server for handling product and review-related functionalities.

### MongoDB Integration

- Integrate MongoDB as the backend database to persist product and review data.
- Define appropriate MongoDB schemas for the Product and Review models.

### Express.js

- Utilize Express.js to build RESTful API endpoints for managing products and reviews.

### Mongoose

- Use Mongoose or another suitable library to interact with MongoDB and facilitate model creation, validation, and queries.

### Data Persistence

- Ensure that data is effectively stored and retrieved from MongoDB.

## Sample Request and Response

```json
// Sample Product Object
{
  "name": "Product A",
  "price": 29.99
}

// Sample Review Object
{
  "userId": "user123",
  "description": "This product is great!"
}

// Sample API Response (GET /api/products/:id)
{
  "_id": "1234567890",
  "name": "Product A",
  "price": 29.99,
  "cDate": "2023/10/12/15/30/45",
  "uDate": "2023/10/12/15/30/45",
  "reviews": [
    {
      "_id": "abcdefghij",
      "userId": "user123",
      "description": "This product is great!",
      "cDate": "2023/10/12/15/35/20",
      "uDate": "2023/10/12/15/35/20"
    }
  ]
}

## Additional Considerations

### Error Handling

- Implement proper error handling for scenarios such as failed CRUD operations or data retrieval issues.

### Testing

- Implement unit tests to validate the functionality of key components, including product and review management.

## Code Comments

- Add comments in the code to explain complex logic or any crucial implementation details.

## User Notifications

- Consider incorporating user-friendly notifications for successful operations or other relevant interactions.

## Usage

### Installation

1. Clone the repository from GitHub.

   ```bash
   git clone https://github.com/Guruprasad3n/CRUD-Node-Application
