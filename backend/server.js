require("dotenv").config(); // dotenv packaged required and initiliazed on the go
const app = require("./app");
const connectMongoDB = require("./database");

//MongoDb connection
connectMongoDB(process.env.MONGODB_URI);

//Listening on PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at port , ${PORT}`);
});
