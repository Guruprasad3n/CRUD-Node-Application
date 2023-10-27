const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

const app = require("../index"); // Import your Express app

describe("Product Management", () => {
  const testProduct = {
    name: "Test Product",
    price: 19.99, // Use a variable for the product price
  };

  it("should create a new product", (done) => {
    request(app)
      .post("/api/products")
      .send(testProduct) // Use the testProduct object
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property("message", "Product added");
        done();
      });
  });

  it("should read all products", (done) => {
    request(app)
      .get("/api/products")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  // Read Product by ID
  it("should read a product by ID", (done) => {
    // Replace 'your_product_id_here' with an actual product ID from your database
    const productId = "653b807864dc4443d084e5dd";

    request(app)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        // Add specific assertions based on the structure of your response
        done();
      });
  });
});
