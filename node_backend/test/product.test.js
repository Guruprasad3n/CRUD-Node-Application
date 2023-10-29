// const chai = require("chai");
// const expect = chai.expect;
// const request = require("supertest");

// const app = require("../index"); // Import your Express app

// describe("Product Management", () => {
//   const testProduct = {
//     name: "Test Product",
//     price: 19.99, // Use a variable for the product price
//   };

//   it("should create a new product", (done) => {
//     request(app)
//       .post("/api/products")
//       .send(testProduct) // Use the testProduct object
//       .end((err, res) => {
//         expect(res.status).to.equal(201);
//         expect(res.body).to.have.property("message", "Product added");
//         done();
//       });
//   });

//   it("should read all products", (done) => {
//     request(app)
//       .get("/api/products")
//       .end((err, res) => {
//         expect(res.status).to.equal(200);
//         expect(res.body).to.be.an("object");
//         done();
//       });
//   });

//   // Read Product by ID
//   it("should read a product by ID", (done) => {
//     // Replace 'your_product_id_here' with an actual product ID from your database
//     const productId = "653b807864dc4443d084e5dd";

//     request(app)
//       .get(`/api/products/${productId}`)
//       .end((err, res) => {
//         expect(res.status).to.equal(200);
//         // Add specific assertions based on the structure of your response
//         done();
//       });
//   });
// });

const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

const app = require("../index"); // Import your Express app

describe("Product Management", () => {
  let createdProductId; // Store the ID of the created product

  before((done) => {
    // Create a product to be used in the test cases
    const newProduct = {
      name: "Test Product",
      price: 19.99,
    };

    request(app)
      .post("/api/products")
      .send(newProduct)
      .end((err, res) => {
        createdProductId = res.body.savedProduct._id;
        done();
      });
  });

  it("should add a new product", (done) => {
    const newProduct = {
      name: "Test Product",
      price: 19.99,
    };

    request(app)
      .post("/api/products")
      .send(newProduct)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property("message", "Product added");
        expect(res.body).to.have.property("savedProduct");
        done();
      });
  });

  it("should read all products", (done) => {
    request(app)
      .get("/api/products")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        // Add more specific assertions based on the structure of your response
        done();
      });
  });

  it("should read a product by ID", (done) => {
    const productId = "653b807864dc4443d084e5dd";
    request(app)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        // expect(res.body).to.have.property('name', 'Test Product');
        // expect(res.body).to.have.property('price', 19.99);
        done();
      });
  });

  // it('should update a product', (done) => {
  //   const updatedProduct = {
  //     name: 'Updated Product Name',
  //     price: 29.99,
  //   };

  //   request(app)
  //     .put(`/api/products/${ProductId}`)
  //     .send(updatedProduct)
  //     .end((err, res) => {
  //       expect(res.status).to.equal(200);
  //       expect(res.body).to.have.property('message', 'Product updated');
  //       expect(res.body).to.have.property('updatedProduct');
  //       expect(res.body.updatedProduct).to.have.property('name', updatedProduct.name);
  //       expect(res.body.updatedProduct).to.have.property('price', updatedProduct.price);
  //       done();
  //     });
  // });

  it("should update a product", (done) => {
    const productId = "653b807864dc4443d084e5dd";
    const updatedProductData = {
      name: "Updated Product Name",
      price: 29.99,
    };

    request(app)
      .put(`/api/products/${productId}`)
      .send(updatedProductData)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property(
          "message",
          "Product Update Successfully"
        );
        expect(res.body).to.have.property("updateProduct");
        expect(res.body.updateProduct).to.have.property(
          "name",
          updatedProductData.name
        );
        expect(res.body.updateProduct).to.have.property(
          "price",
          updatedProductData.price
        );
        done();
      });
  });

  it("should delete a product", (done) => {
    const productId = "653b807864dc4443d084e5dd";
    request(app)
      .delete(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("message", "Product deleted");
        done();
      });
  });

  // it('should handle deleting a non-existent product', (done) => {
  //   request(app)
  //     .delete('/api/products/nonexistentid')
  //     .end((err, res) => {
  //       expect(res.status).to.equal(404);
  //       expect(res.body).to.have.property('message', 'Product Not Found');
  //       done();
  //     });
  // });

  // Add more test cases as needed
});
