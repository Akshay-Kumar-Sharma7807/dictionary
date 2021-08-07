import Axios from "axios";

export const getWordDetails = (word) => {
  Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`).then(
    (res) => {
      return res.data;
    }
  );
};
