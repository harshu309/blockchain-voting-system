import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Blockchain Voting System
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Blockchain Voting System
        </Typography>
        <Typography>
          A secure and transparent voting platform built with Blockchain.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Cast Your Vote
        </Button>
      </Container>
    </>
  );
}

export default App;

