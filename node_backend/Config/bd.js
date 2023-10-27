const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo DB Connected`);
  } catch (e) {
    console.log(e + "Mongo Error");
  }
};
module.exports = connectDB;
