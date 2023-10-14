const express = require('express');
const app = express();
const cors = require('cors');
const connectToMongo = require("./db.js");
connectToMongo();
const port = 5000;
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
  }

app.use("/api/auth", require("./routes/auth"));


app.listen(port, () =>{
    console.log(`Rent-Tech is listening on ${port}`);
})