import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Axios from "axios";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { ListItem, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function ListDividers(props) {
  const [words, setWords] = useState();
  useEffect(() => {
    console.log("component rerendered");
    Axios.get("http://localhost:4000/words/?query=" + props.search).then(
      (res) => {
        setWords(res.data);
        console.log(res);
      }
    );
  }, [props.search]);
  // const classes = useStyles();
  // const {
  //   getRootProps,
  //   getInputLabelProps,
  //   getInputProps,
  //   getListboxProps,
  //   getOptionProps,
  //   groupedOptions,
  // } = useAutocomplete({
  //   id: "use-autocomplete-demo",
  //   options: words,
  //   getOptionLabel: (option) => option,
  // });

  const history = useHistory();
  const handleListItemClick = (e) => {
    history.push("/defination/" + e.target.innerHTML);
  };
  const Row = ({ index, style }) => (
    <ListItem
      button
      style={style}
      // selected={selectedIndex === 0}
      onClick={(event) => handleListItemClick(event, 0)}
    >
      <ListItemText primary={words[index]} />
    </ListItem>
  );

  return (
    <AutoSizer className="auto-sizer">
      {({ height, width }) =>
      // {
        {
          return (
            words && (
              <FixedSizeList
                height={400}
                itemCount={words.length}
                itemSize={35}
                width={width}
                // style={{ height: "100%", width: "100%" }}
              >
                {/* {({ index, style }) => <div style={style}>{words[index]}</div>} */}
                {Row}
              </FixedSizeList>
            )
          );
        // }
      }}
    </AutoSizer>
  );
}
