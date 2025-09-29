import React from "react";
import { Container, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography>
        Here you can see your past votes, participation, and statistics.
      </Typography>
    </Container>
  );
}

export default Dashboard;
