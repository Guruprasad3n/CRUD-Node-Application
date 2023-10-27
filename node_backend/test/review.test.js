const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

const app = require('../index');

describe("Review Management", () => {
  it("should add a review to a product", (done) => {
    // Test adding a review to a product and assert the response
    request(app)
      .post("/api/products/:productId/reviews")
      .send({ userId: "user123", description: "Great product!" })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property(
          "message",
          "Review Added in Product Successful"
        );
        done();
      });
  });

  // Write more test cases for review management here
});
