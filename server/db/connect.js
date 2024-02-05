const mongoose = require("mongoose");

uri =
  "mongodb+srv://saurabhsingh9637:a1vQyyH8NVJ8Nd4F@innsync.alhtx8a.mongodb.net/InnSync?retryWrites=true&w=majority";
const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
