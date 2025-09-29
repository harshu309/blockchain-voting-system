import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 5,
        py: 3,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid #2d3748",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Blockchain Voting System. All Rights Reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Built with ❤️ using{" "}
        <Link href="https://react.dev/" target="_blank" color="secondary">
          React
        </Link>{" "}
        &{" "}
        <Link href="https://mui.com/" target="_blank" color="secondary">
          Material UI
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
