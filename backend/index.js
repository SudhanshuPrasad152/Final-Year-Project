const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongo = require("./db.js");
connectToMongo();
const port = 5000;
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/auth", require("./routes/auth"));
app.use("/api/rent", require("./routes/rent"));
app.use("/api/product", require("./routes/product"));
app.use("/api/payment", require("./routes/payment"))

app.listen(port, () => {
  console.log(`Rent-Tech is listening on ${port}`);
});
