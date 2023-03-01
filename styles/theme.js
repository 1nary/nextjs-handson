import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
});

export default theme;