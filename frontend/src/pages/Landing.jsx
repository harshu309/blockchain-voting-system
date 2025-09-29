import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #4f46e5, #9333ea)",
        color: "white",
        px: 2,
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Decentralized Voting, Simplified 🗳️
        </Typography>
        <Typography variant="h6" gutterBottom>
          Secure. Transparent. Powered by Blockchain.
        </Typography>
        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          size="large"
          sx={{ mt: 3, bgcolor: "black" }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
