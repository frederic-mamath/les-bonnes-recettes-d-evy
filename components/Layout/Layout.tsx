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

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <Typography variant="h1">Les bonnes recettes d&apos;evy</Typography>
          </Link>
          <Stack direction="row" gap={2}>
            <Select>
              <MenuItem>France</MenuItem>
              <MenuItem>Japonais</MenuItem>
              <MenuItem>Chinois</MenuItem>
              <MenuItem>Vietnamien</MenuItem>
              <MenuItem>Italien</MenuItem>
            </Select>
            <Select>
              <MenuItem>Entrée</MenuItem>
              <MenuItem>Plat</MenuItem>
              <MenuItem>Dessert</MenuItem>
            </Select>
            <TextField variant="outlined" />
          </Stack>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
