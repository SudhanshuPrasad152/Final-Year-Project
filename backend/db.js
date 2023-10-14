const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://sudhanshuprasad153:cjnJ1TbkJ3tJlkwo@cluster0.gdlf1wn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURL);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
