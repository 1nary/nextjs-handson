import { AppBar, Box, Button, TextField, Toolbar } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import React from 'react';

const Header = () => {
  return (
    <AppBar position="static" className={styles.header} sx={{ px: 7 }}>
      <Toolbar>
        <Image src="/logo.svg" alt="Vercel Logo" width={230} height={20} />
        <Box
          sx={{
            width: '100%',
            px: 3,
          }}
        >
          <TextField fullWidth label="キーワード（例：カフェ・ラーメン・レストラン）" id="fullWidth" />
        </Box>
        <Button color="inherit" className={styles.btn}>
          検索
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
