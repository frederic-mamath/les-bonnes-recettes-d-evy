import { createTheme } from "@mui/material";

const fontSize = {
  xxl: "40px",
  xl: "32px",
  l: "24px",
  m: "16px",
};

const colorPalette = {
  white: "#FFFFFF",
};

export const basicTheme = createTheme();
export const muiTheme = createTheme({
  typography: {
    h1: {
      fontSize: fontSize.xxl,
      [basicTheme.breakpoints.down("md")]: {
        fontSize: fontSize.m,
      },
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
