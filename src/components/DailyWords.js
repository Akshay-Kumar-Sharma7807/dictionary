import React, { useEffect, useState } from 'react';
import {
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1.5rem"
  },
  heading: {
    margin: "1rem"
  },
  card: {
    margin: ".5rem"
  }
}))
export default function DailyWords() {
  const classes = useStyles();

  const [results, setResults] = useState()

  useEffect(() => {
    let words = ["Hi", "WHO", "Defination", "API", "Public", "About", "Draw", "Dictionary", "File", "App"];
    let random = words[Math.floor(Math.random() * 10)];
    console.log(random);
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${random}`
    ).then((res) => {
      // console.log(res.data);
      setResults(res.data);
      console.log(res.data);
    });
  }, [])


  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h4" className={classes.heading}>
        Today's Word
      </Typography>
      {!results && (
        <Card className={classes.card} elevation={5}>
          <CardContent>
            <Typography variant='h4'>
              <Skeleton variant="text" width={180} />
            </Typography>
            <Typography variant='h6'>
              <Skeleton variant="text" width={150} />
            </Typography>
            <Typography variant='h5' style={{ borderRadius: '50px' }} >
              <Skeleton width={140} />
            </Typography>
            <Skeleton variant="rect" height={60} />
          </CardContent>
        </Card>
      )}
      {results &&
        results.map((result, index) => (
          <Card className={classes.card} elevation={5}>
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
                  <source src={result.phonetics[0]?.audio} />
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
            {/* <CardActions>
              <Button size="small" href={}>Learn More</Button>
            </CardActions> */}
          </Card>
        ))}
    </Paper>
  )
}
