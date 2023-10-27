const express = require("express");
const cors = require("cors");
const allRoutes = require("./Routes/productRoute");
const dotenv = require("dotenv").config();
const connectDB = require("./Config/bd");
const mongoose = require("mongoose");
const ProductModel = require("./Models/productModel");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/", allRoutes);

app.listen(PORT, async (req, res) => {
  // connectDB
  console.log("Connected");
  console.log(`server conected in http://localhost:${PORT}`);
});

module.exports = app;