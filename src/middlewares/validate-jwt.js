const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({ msg: "You don't have token" });
  }

  try {
    const { uid } = jwt.verify(token, process.env.PRIVATEKEY);

    // read user from db
    const user = await User.findById(uid);

    // check if user exist
    if (!user) {
      return res
        .status(404)
        .json({ msg: "Invalid token - User not fount" });
    }

    // check if uid has status true
    if (!user.status) {
      res.status(401).json({ msg: "Invalid token - Inactive user" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = {
  validateJWT,
};
