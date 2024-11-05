import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@mui/material';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}
