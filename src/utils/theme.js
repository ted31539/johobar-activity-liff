import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8E47",
      light: "#FFA770",
      dark: "FF680A",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFB563",
      light: "#FFF5EB",
    },
    error: {
      main: "#A41623",
    },
  },
  typography: {
    fontFamily: [
      "Noto Serif TC",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
  },
});

export default theme;
