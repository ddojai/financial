import React from 'react';
import { Box, Button, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.125rem',
    fontWeight: 800,
    letterSpacing: '2px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    "& > *": {
      margin: theme.spacing(1)
    }
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Link className={classes.logo} href="/">Financial Independence</Link>
      <Box className={classes.right}>
        <Button href="/login">
          Login
        </Button>
        <Button href="/signup">
          SignUp
        </Button>
      </Box>
    </Box>
  );
}

export default Header;