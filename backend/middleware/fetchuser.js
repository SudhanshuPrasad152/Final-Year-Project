const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const fetchuser = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res
      .status(401)
      .send({ error: "Please authenticate yourself using valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Please authenticate yourself using valid token" });
  }
};

module.exports = fetchuser;
