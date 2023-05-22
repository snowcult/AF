import React, { memo } from 'react';
import { AppBar, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

const Header = memo(() => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: green['A200'] + '10', padding: '1.5rem' }}
    >
      <Typography variant="h3">AiFriends</Typography>
    </AppBar>
  );
});
Header.displayName = 'Header';
export default Header;
