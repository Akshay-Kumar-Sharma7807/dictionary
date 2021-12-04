import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Check from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary,
    width: "100%",
    height: "100%",
    padding: "50px 0",
  },
  paper: {
    padding: theme.spacing(2),
  },
  button: {
    display: "block",
    margin: "auto",
  },
  green: {
    color: "#11bb11",
  },
}));

export default function Settings() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md">
        <Paper color="secondary" style={{ padding: "10px" }}>
          <Typography>There is no Pro version currently.</Typography>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Upgrade to Pro
          </Typography>

          <TableContainer style={{ marginBottom: 20 }}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Offline Access
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    NO Ads
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Save Theme
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Word Games
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Direct and Indirect Converter
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    More Language Access
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Premium Support
                  </TableCell>
                  <TableCell align="right">
                    <Check className={classes.green} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h4" align="center" component="h2" gutterBottom>
            Price: $10
          </Typography>

          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Upgrade
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
