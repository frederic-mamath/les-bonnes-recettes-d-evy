import { AppBar, Button, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <AppBar position="sticky">
        <Stack direction="row">
          <Button variant="contained">Home</Button>
          <Typography variant="h1">Les bonnes recettes d&apos;evy</Typography>
        </Stack>
      </AppBar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
