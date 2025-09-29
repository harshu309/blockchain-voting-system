import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4f46e5", // Indigo
    },
    secondary: {
      main: "#9333ea", // Purple
    },
    background: {
      default: "#0f172a", // Dark blue/gray
      paper: "#1e293b",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h4: { fontWeight: 700 },
    body1: { lineHeight: 1.7 },
  },
});

export default theme;
