const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://akshay:akshay@akscluster.gpmyf.mongodb.net/words?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("mongoose connected");
  }
);

let wordSchema = new mongoose.Schema({
  word: String,
});
const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
