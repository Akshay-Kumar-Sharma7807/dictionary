import React from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import Input from "./Input";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  paper:{
    // padding: '0.1rem',
    borderBottom: '2px solid' + theme.palette.primary.main,
    marginBottom: 20,
    // borderBottomColor:
  }
}))

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="container" position="static">
    <Paper elevation={0} className={classes.paper}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          // gutterBottom
          style={{ marginTop: 10, color: 'currentColor' }}
        >
          Search Words
        </Typography>
      </Paper>
      <Input />
    </Container>
  );
}
