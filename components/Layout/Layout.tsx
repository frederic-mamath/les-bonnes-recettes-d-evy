import {
  AppBar,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>Les bonnes recettes d&apos;Evy</title>
      </Head>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <Typography variant="h1">Les bonnes recettes d&apos;evy</Typography>
          </Link>
          <Stack direction="row" gap={2}>
            <Select
              placeholder="Type de cuisine"
              variant="outlined"
              color="secondary"
            >
              <MenuItem>France</MenuItem>
              <MenuItem>Japonais</MenuItem>
              <MenuItem>Chinois</MenuItem>
              <MenuItem>Vietnamien</MenuItem>
              <MenuItem>Italien</MenuItem>
            </Select>
            <Select
              placeholder="Catégorie"
              variant="outlined"
              color="secondary"
            >
              <MenuItem>Entrée</MenuItem>
              <MenuItem>Plat</MenuItem>
              <MenuItem>Dessert</MenuItem>
            </Select>
            <TextField variant="outlined" color="secondary" />
          </Stack>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
