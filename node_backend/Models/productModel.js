const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  cDate: {
    type: Date,
    default: Date.now,
  },
  uDate: {
    type: Date,
    default: Date.now,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

const ProductModel = model("Product", productSchema);

const reviewSchema = new Schema({
  userId: { type: String },
  description: { type: String },
  cDate: { type: Date, default: Date.now },
  uDate: { type: Date, default: Date.now },
});

const ReviewModel = model("Review", reviewSchema);
module.exports = {ProductModel, ReviewModel};
