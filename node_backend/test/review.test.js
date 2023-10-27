const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

const app = require("../index");

describe("Review Management", () => {
  let createdProductId;

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

  it("should create a review for a product", (done) => {
    const review = {
      userId: "user123",
      description: "This product is great!",
    };

    request(app)
      .post(`/api/products/${createdProductId}/reviews`)
      .send(review)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property(
          "message",
          "Review Added in Product Successful"
        );
        done();
      });
  });

  it("should handle creating a review for a non-existent product", (done) => {
    const review = {
      userId: "user123",
      description: "This product is great!",
    };

    request(app)
      .post("/api/products/nonexistentid/reviews")
      .send(review)
      .end((err, res) => {
        expect(res.status).to.equal(500);
        expect(res.body).to.have.property(
          "message",
          "Something Went Wrong While Creating Review"
        );
        done();
      });
  });
});
