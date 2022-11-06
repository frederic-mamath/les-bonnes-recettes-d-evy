import { createTheme } from "@mui/material";

const fontSize = {
  xxl: "42px",
};

export const muiTheme = createTheme({
  typography: {
    h1: {
      fontSize: fontSize.xxl,
    },
  },
});
