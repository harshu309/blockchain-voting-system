import React from "react";
import { Container, Typography, Button, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

function ProposalDetails() {
  const { id } = useParams();

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Proposal #{id}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Detailed description of proposal #{id} goes here...
      </Typography>

      <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary">Vote Yes</Button>
        <Button variant="contained" color="secondary">Vote No</Button>
      </Stack>
    </Container>
  );
}

export default ProposalDetails;
