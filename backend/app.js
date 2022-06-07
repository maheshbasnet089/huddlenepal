const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute.js");
const morgan = require("morgan");

if ((process.env.NODE_ENV = "developement")) {
  app.use(morgan("tiny")); // logging info about user(request) using morgan package, see more about morgan on npm registry
}
app.use(express.json());

//Authentication Routes
app.use("/api/v1/users", userRouter);

module.exports = app;
