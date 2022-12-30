const mongoose = require("mongoose");

const DB = "mongodb+srv://Ravi1408:hJsKwVDCc9OQQbaI@cluster0.rg3mox3.mongodb.net/message?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose.connect(DB).then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("no connection");
  });