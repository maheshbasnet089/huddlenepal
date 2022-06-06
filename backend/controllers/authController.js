const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const singinToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const cookieOptions = {
  expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};
if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
const createToken = (user, statusCode, res) => {
  const token = singinToken(user._id);

  //send cookie in response with token in it
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    email: req.body.email,
    role: req.body.role,
    passwordChangedAt: req.body.passwordChangedAt,
  });
  createToken(newUser, 201, res);
};
