import { createTheme } from "@mui/material";

const fontSize = {
  xxl: "42px",
  xl: "34px",
};

const colorPalette = {
  white: "#FFFFFF",
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
  components: {
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined", color: "secondary" },
          style: { backgroundColor: colorPalette.white },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: colorPalette.white,
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined", color: "secondary" },
          style: {},
        },
      ],
    },
  },
});
