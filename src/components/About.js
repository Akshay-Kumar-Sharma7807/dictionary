import React from "react";
import {
  Typography,
  Container,
  Avatar,
  Paper,
  Grid,
  Divider,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableCell,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              About App
            </Typography>
            <Divider />
            {/* <Avatar
              src="https://www.w3schools.com/tags/smiley.gif"
              className="avatar"
            ></Avatar> */}
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Version
                    </TableCell>
                    <TableCell align="right">1.0.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Name
                    </TableCell>
                    <TableCell align="right">
                      Dictionary App by Akshay
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Short Name
                    </TableCell>
                    <TableCell align="right">Dictionary</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Owner
                    </TableCell>
                    <TableCell align="right">Akshay Kumar Sharma</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Licence
                    </TableCell>
                    <TableCell align="right">ISC</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              About Developer
            </Typography>
            <Divider />
            {/* <Avatar
              src="https://www.w3schools.com/tags/smiley.gif"
              className="avatar"
            ></Avatar> */}
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      First Name
                    </TableCell>
                    <TableCell align="right">Akshay</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Last Name
                    </TableCell>
                    <TableCell align="right">Kumar Sharma</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      E-mail
                    </TableCell>
                    <TableCell align="right">
                      sharmaakshaykumar7807@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Website
                    </TableCell>
                    <TableCell align="right">
                      <Link href="https://akshayprogrammer7807.wordpress.com/">
                        Go to Website
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Contact Me
                    </TableCell>
                    <TableCell align="right">contact</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
