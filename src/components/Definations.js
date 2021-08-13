import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,

} from "@material-ui/core";
import {Skeleton} from '@material-ui/lab'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Definations() {
  const classes = useStyles();
  const { search } = useParams();
  const [results, setResults] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`
    ).then((res) => {
      // console.log(res.data);
      setResults(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Container maxWidth="md">
      {!results && (
        <Card className={classes.root} elevation={5}>
          <CardContent>
          <Typography variant='h4'>
            <Skeleton variant="text" width={180} />
          </Typography>
          <Typography variant='h6'>
            <Skeleton variant="text" width={150} />
          </Typography>
          <Typography variant='h5' style={{borderRadius: '50px'}} >
            <Skeleton width={140} />
          </Typography>
          <Skeleton variant="rect" height={60} />
          </CardContent>
        </Card>
      )}
      {results &&
        results.map((result, index) => (
          <Card className={classes.root} elevation={5}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {result.word}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {result.phonetic}
              </Typography>
              <CardMedia>
                <audio controls>
                  <source src={result.phonetics[0].audio} />
                  {/* <source src="horse.mp3" type="audio/mpeg"> */}
                  Your browser does not support the audio element.
                </audio>
              </CardMedia>
              <Typography className={classes.pos} color="textSecondary">
                {result.meanings.map((meaning, index) => {
                  if (index === result.meanings.length - 1) {
                    return meaning.partOfSpeech;
                  }
                  return meaning.partOfSpeech + " - ";
                })}
              </Typography>
              <Typography variant="body2" component="p">
                {result.meanings[0].definitions[0].definition}
                <br />
                {result.meanings[0].definitions[0].example}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
    </Container>
  );
}

// <Paper className="display">
//   <Typography variant="h3" component="div" align="center">
//     {result.word}
//   </Typography>
//   <Typography>{result.phonetic}</Typography>
// </Paper>
