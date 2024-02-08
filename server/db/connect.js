const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
