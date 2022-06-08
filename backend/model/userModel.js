const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const { randomBytes, createHash } = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "A user must have a name "],
  },
  email: {
    type: String,
    required: [true, " A user must have an email"],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please provide correct Email"],
  },
  avatar: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  password: {
    type: String,
    required: [true, " A user must have a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      //only works on create and save
      validator: function (el) {
        return el == this.password;
      },
      message: "Password are not Same ",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetTokenExpiresIn: Date,
});

//pre save middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12); // here, this refers to this userModel.js document
  this.passwordConfirm = undefined;
  next();
});

//compare password
userSchema.methods.comparePassword = async function (
  candidatePassword, // req.body.password provided by user
  userPassword //hashed password stored in the database
) {
  return await bcrypt.compare(candidatePassword, userPassword); //returns true or false only
};

//checks if password is changed or not

userSchema.methods.passwordChangedAfter = function (tokenCreatedDate) {
  if (this.passwordChangedAt) {
    const getTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return getTimeStamp > tokenCreatedDate;
  }
  return false; // if no password was changed at all
};
//create Reset Token for forgot password
userSchema.methods.createResetToken = function () {
  const resetToken = randomBytes(32).toString("hex");
  this.passwordResetToken = createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpiresIn = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
