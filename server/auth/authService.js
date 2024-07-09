const User = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const generateToken = require("../config/jwt.js");

const register = async (username, email, password) => {
  const user = new User({ username, email, password });
  await user.save();
  return generateToken(user);
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  return generateToken(user);
};

module.exports = { register, login };
