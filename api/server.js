const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
// Returns the path to the word list which is separated by `\n`
// const wordListPath = require("word-list");
const Word = require("./words.js");
// const axios = require("axios");

// const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");


// this is code for getting all the words from english.txt
// const dictArray = fs.readFileSync('./english.txt',"utf8").split("\r\n");
// console.log(dictArray);
// let dictObjectArray = [];
// for (dict in dictArray) {
//   dictObjectArray.push({word:dictArray[dict]});
// }
// console.log(dictObjectArray)

// MongoDb Here --------------------------------------------------------------
// this is a script to save all of the words that dictionary support to the
// mongodb database



// const mongoose = require("mongoose");
//
// mongoose.connect(
//   "mongodb+srv://akshay:akshay@akscluster.gpmyf.mongodb.net/words?retryWrites=true&w=majority",
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   () => {
//     console.log("mongoose connected");
//   }
// );
// var db = mongoose.connection;
//
//
//
// db.once('open', function() {
//   console.log("Connection Successful!");
//   let wordSchema = new mongoose.Schema({
//     word: String,
//   });
//   const Word = mongoose.model("Word", wordSchema);
//
//     // define Schema
//
//     Word.collection.insertMany(dictObjectArray, function (err, docs) {
//       if (err){
//           return console.error(err);
//       } else {
//         console.log("Multiple documents inserted to Collection");
//       }
//     });
//
// });



// ============================================================================


//=> […, 'abmhos', 'abnegate', …]

// Logic to create words that are in free api database filtered from wordArray
// wordArray.map((word, index) => {
//   if (index > 100) {
//   } else {
//     axios
//       .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
//       .then((res) => {
//         console.log(res.data);
//         let word = new Word({ word: res.data[0].word });
//         word.save().then(() => console.log("saved"));
//       })
//       .catch((err) => console.log("err"));
//   }
// });
// var dictstring = JSON.stringify(wordArray);
// fs.writeFile("thing.json", dictstring, function (err, result) {
//   if (err) console.log("error", err);
// });

app.use(cors());

app.get("/words", (req, res) => {
  var queryRegex;
if(!req.query.exact || req.query.exact === 'false'){
  queryRegex = new RegExp(req.query.query, 'ig')
}else if (req.query.exact === 'true'){
  queryRegex = new RegExp('^'+req.query.query, 'ig')
}
else {
  queryRegex = new RegExp(req.query.query, 'ig')
}
  Word.find({word:queryRegex},(err, docs)=>{
    const result = [];
    docs.map((doc)=> {
      result.push(doc.word)
    });
    res.json(result)
  })
  // let result = wordArray.filter((item) => {
  //   if (!req.query.query) {
  //     res.json(wordArray);
  //   }
  //   return (
  //     item.toString().toLowerCase().indexOf(req.query.query.toLowerCase()) > -1
  //   );
  // });
  // res.json(result);
});

app.get('/all-words', (req,res) => {
  Word.find((err,docs)=>{
    const result = [];
    docs.map((doc)=> {
      result.push(doc.word)
    });
    res.json(result);
  })
})

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
