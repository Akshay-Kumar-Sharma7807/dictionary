import React from "react";
import { Container, Typography } from "@material-ui/core";
import Input from "./Input";

export default function Home() {
  return (
    <Container maxWidth="md" className="container">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        style={{ marginTop: 10 }}
      >
        Search Words
      </Typography>
      <Input />
    </Container>
  );
}
