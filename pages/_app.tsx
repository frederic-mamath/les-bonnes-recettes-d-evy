import type { AppProps } from "next/app";

import Layout from "components/Layout";

import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "styles/muiTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
