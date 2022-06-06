const mongoose = require("mongoose");

function connectMongoDB(URI) {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected sucesfully !");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectMongoDB;
