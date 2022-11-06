import { createTheme } from "@mui/material";

const fontSize = {
  xxl: "42px",
  xl: "34px",
};

export const muiTheme = createTheme({
  typography: {
    h1: {
      fontSize: fontSize.xxl,
    },
    h2: {
      fontSize: fontSize.xl,
    },
  },
});
