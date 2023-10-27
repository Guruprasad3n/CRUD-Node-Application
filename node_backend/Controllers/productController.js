const { ProductModel, ReviewModel } = require("../Models/productModel");

const homeRouter = async (req, res) => {
  res.send("Welcome TO Node Assignment");
};

// Add a Product
const AddaProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new ProductModel({ name, price });
    const savedProduct = await product.save();
    return res.status(201).send({ message: "Product added", savedProduct });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ message: "Could not add the product", e });
  }
};

// Read All Products
const readAllProducts = async (req, res) => {
  // Implement product listing logic
  try {
    const product = await ProductModel.find();
    return res
      .status(200)
      .send({ message: "Product Read Successful", product });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      message: "Something Went Wrong While Getting Products",
      e,
    });
  }
};

// Read Product by ID
const ReadProductByID = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findById(productId);
    if (!productId) {
      return res.status(404).send({ message: "Product Not Found" });
    }
    return res.status(200).send({ message: "Here is the Product", product });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "Someting Went Wrong While getting Product By ID" });
  }

  // Implement product retrieval by ID logic
};

// Update a Product
const UpdateAProduct = async (req, res) => {
  // Implement product update logic

  try {
    const ProductId = req.params.id;
    const updateData = req.body;
    const updateProduct = await ProductModel.findByIdAndUpdate(
      ProductId,
      updateData,
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).send({ message: "Product Not Found" });
    }
    return res
      .status(200)
      .send({ message: "Product Update Successfully", updateProduct });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "Something While Updating the Product" });
  }
};

// Delete a Product
const DeleteAProduct = async (req, res) => {
  // Implement product deletion logic

  try {
    const productId = req.params.id;

    const deleteProduct = await ProductModel.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res.status(404).send({ message: "Product Not Found" });
    }
    return res
      .status(200)
      .send({ message: "Delete Product Successful", deleteProduct });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "Something Went Wrong While Deleting The Prodcut" });
  }
};

// Create a Review for a Product
const createProductReview = async (req, res) => {
  // Implement review creation logic
  try {
    const productId = req.params.id;
    const { userId, description } = req.body;
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).send({ message: "Product Not Found" });
    }
    const createReview = new ReviewModel({ userId, description });
    product.reviews.push(createReview);
    const saveProduct = await product.save();
    const cReview = await createReview.save();
    if (!saveProduct) {
      return res.status(500).send({ message: "Review not saved" });
    }
    return res
      .status(200)
      .send({ message: "Review Added in Product Successful", saveProduct });
  } catch (e) {
    console.log("e" + e);
    return res
      .status(500)
      .send({ message: "Something Went Wrong While Creating Review", e });
  }
};

// Delete a Review
const deleteReview = async (req, res) => {
  // Implement review deletion logic
  try {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).send({ message: "Product Not Found" });
    }

    const review = product.reviews.findIndex((e) => e._id == reviewId);
    if (review === -1) {
      return res.status(404).send({ message: "Review not found" });
    }
    // Removing the review from the product array
    product.reviews.splice(review, 1);

    const savedProduct = await product.save();
    return res
      .status(200)
      .send({ message: "Review deleted Successful", savedProduct });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "Something Went Wrong While Deleting The Review" });
  }
};

// Virtual Population of Reviews for a Product
const virtualPopulatioOfreview = async (req, res) => {
  // Implement virtual population logic

  try {
    const productId = req.params.productId;
    const product = await ProductModel.findById(productId).populate("reviews");
    if (!product) {
      return res
        .status(404)
        .send({ message: "Product Not Availabe or Not Found" });
    }
    return res
      .status(200)
      .send({ message: "Populate Reviews Successful", product });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "Something Went Wrong While Populating Reviews" });
  }
};

module.exports = {
  homeRouter,
  AddaProduct,
  readAllProducts,
  ReadProductByID,
  UpdateAProduct,
  DeleteAProduct,
  createProductReview,
  deleteReview,
  virtualPopulatioOfreview,
};
