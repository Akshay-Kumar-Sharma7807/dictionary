import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import TranslateIcon from "@material-ui/icons/Translate";
import { useHistory } from "react-router-dom";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "50px",
    padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const history = useHistory();

  const searchWord = (e) => {
    e.preventDefault();
    // history.push(`/dictionary/${search}`);
    // Axios.get(
    //   `https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`
    // ).then((res) => {
    //   setResult(res.data);
    // });
    history.push("/defination/" + search);
  };

  return (
    <>
      <Paper component="form" className={classes.root} onSubmit={searchWord} elevation={1}>
        <InputBase
          className={classes.input}
          placeholder="Search Dictionary"
          inputProps={{ "aria-label": "search dictionary" }}
          required
          value={search}
          autoFocus
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search && (
          <IconButton
            type="button"
            className={classes.iconButton}
            aria-label="clear"
            onClick={() => {
              setSearch("");
            }}
          >
            <ClearIcon />
          </IconButton>
        )}
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Button
          color="primary"
          className={classes.iconButton}
          aria-label="languages"
          startIcon={<TranslateIcon />}
        >
          <Typography className='hide-on-small'>Language</Typography>
        </Button>
      </Paper>
      <List search={search} />
    </>
  );
}
