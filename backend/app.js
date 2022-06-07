const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute.js");
const morgan = require("morgan");

app.use(express.json());
if ((process.env.NODE_ENV = "developement")) {
  app.use(morgan("tiny")); // logging info about user(request) using morgan package, see more about morgan on npm registry
}

//Authentication Routes
app.use("/api/v1/users", userRouter);

module.exports = app;
