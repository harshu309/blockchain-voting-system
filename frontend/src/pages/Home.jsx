import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Blockchain Voting
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Secure • Transparent • Decentralized
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/proposals"
        sx={{ marginTop: 3 }}
      >
        View Proposals
      </Button>
    </Container>
  );
}

export default Home;
