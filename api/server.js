const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
// Returns the path to the word list which is separated by `\n`
const wordListPath = require("word-list");

const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");
//=> […, 'abmhos', 'abnegate', …]
app.use(cors());

app.get("/words", (req, res) => {
  let result = wordArray.filter((item) => {
    // return searchParam.some((newItem) => {
    if (!req.query.query) {
      res.json(wordArray);
    }
    return (
      item.toString().toLowerCase().indexOf(req.query.query.toLowerCase()) > -1
    );
    // });
  });
  res.json(result);
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
