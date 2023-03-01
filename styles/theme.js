import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { purple, cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: purple,
  },
});

export default theme;