const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
// Returns the path to the word list which is separated by `\n`
const wordListPath = require("word-list");
// const Word = require("./words.js");
// const axios = require("axios");

const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");
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
var dictstring = JSON.stringify(wordArray);
// var fs = require("fs");
fs.writeFile("thing.json", dictstring, function (err, result) {
  if (err) console.log("error", err);
});

app.use(cors());

app.get("/words", (req, res) => {
  let result = wordArray.filter((item) => {
    if (!req.query.query) {
      res.json(wordArray);
    }
    return (
      item.toString().toLowerCase().indexOf(req.query.query.toLowerCase()) > -1
    );
  });
  res.json(result);
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
