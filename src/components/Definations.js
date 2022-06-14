import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,

} from "@material-ui/core";
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
  phonetic: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "1.2rem",
    lineHeight: "1.2rem"
  },
  "phonetic:hover": {
    color: "red",
  }
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

  const playSound = (e, url) => {
    if (!url) {
      return
    }

    let audio = new Audio(url)
    audio.addEventListener("canplaythrough", event => {
      /* the audio is now playable; play it if permissions allow */
      audio.play();
    });
  }

  return (
    <Container maxWidth="md" style={{ padding: "0 0 1rem 0" }}>
      {!results && (
        <Card className={classes.root} elevation={5} gutterBottom>
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
          <Card className={classes.root} elevation={5}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {result.word[0].toUpperCase() + result.word.substring(1)}
              </Typography>
              {/* <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {result.phonetic}
              </Typography> */}
              {
                result.phonetics.map((phonetic) => {

                  return (
                    <Button className={classes.phonetic} startIcon={<PlayArrowIcon />}>
                      <Typography className={classes.title} color="textSecondary" onClick={(e) => playSound(e, phonetic.audio)}>
                        {phonetic.text}
                      </Typography>

                    </Button>
                  )
                })
              }
              <Typography color="textSecondary" gutterBottom>
                {result.meanings.map((meaning, index) => {
                  if (index === result.meanings.length - 1) {
                    return meaning.partOfSpeech;
                  }
                  return meaning.partOfSpeech + " - ";
                })
                }
              </Typography>
              <Typography className={classes.pos} >
                {result.meanings.map((meaning, index) => {
                  // if (index === result.meanings.length - 1) {
                  //   return meaning.partOfSpeech;
                  // }
                  // return meaning.partOfSpeech + " - ";
                  return <div>
                    {meaning.definitions.map((definition, index) => {
                      return <Typography gutterBottom>
                        <li>{definition.definition}</li>

                        {definition.example && <Typography><em>{" Eg. " + definition.example}</em></Typography>}
                      </Typography>
                    })}
                  </div>
                })}
              </Typography>
              {/* <Typography variant="body2" component="p">
                {result.meanings[0].definitions[0].definition}
                <br />
                {result.meanings[0].definitions[0].example}
              </Typography> */}
            </CardContent >
            {/* <CardActions>
              <Button size="small" href={}>Learn More</Button>
            </CardActions> */}
          </Card >
        ))
      }
    </Container >
  );
}

// <Paper className="display">
//   <Typography variant="h3" component="div" align="center">
//     {result.word}
//   </Typography>
//   <Typography>{result.phonetic}</Typography>
// </Paper>
