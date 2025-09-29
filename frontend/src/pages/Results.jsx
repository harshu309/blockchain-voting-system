import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ProposalDetails() {
  const { id } = useParams();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight={700} gutterBottom color="white">
          Proposal #{id}
        </Typography>
        <Typography variant="body1" color="white" gutterBottom>
          This is a detailed description of the proposal #{id}. Voters can
          review the proposal and cast their votes below.
        </Typography>
        <Stack spacing={2} mt={3}>
          <Button variant="contained" color="primary">
            ✅ Vote Yes
          </Button>
          <Button variant="contained" color="secondary">
            ❌ Vote No
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
