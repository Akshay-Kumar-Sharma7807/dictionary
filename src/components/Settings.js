import React from "react";
import { Container, Typography, Button } from "@material-ui/core";

export default function Settings() {
  return (
    <div className="wrapper">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" component="h1">
          Settings
        </Typography>
      </Container>
    </div>
  );
}
