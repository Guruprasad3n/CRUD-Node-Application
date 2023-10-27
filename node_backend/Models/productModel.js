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
// module.exports = ReviewModel

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   cDate: { type: Date, default: Date.now },
//   uDate: { type: Date, default: Date.now },
//   reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
// });

// const reviewSchema = new mongoose.Schema({
//   userId: String,
//   description: String,
//   cDate: { type: Date, default: Date.now },
//   uDate: { type: Date, default: Date.now },
// });

// const ProductModel = mongoose.model("Product", productSchema);
// const Review = mongoose.model("Review", reviewSchema);

// module.exports = { ProductModel, Review };
