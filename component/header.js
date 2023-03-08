import { AppBar, Box, Button, TextField, Toolbar } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { fetchGourmets } from '../lib/fetchHelper';

const Header = ({ setGourmets }) => {
  const [keyword, setKeyword] = useState('');

  const onSearchClick = async () => {
    const data = await fetchGourmets(keyword);

    setGourmets(data);
  };

  return (
    <AppBar position="static" className={styles.okiuHeader} sx={{ px: 7 }}>
      <Toolbar style={{ padding: '0px' }}>
        <Image src="/logo.svg" alt="Vercel Logo" width={200} height={20} />
        <Box
          sx={{
            width: '100%',
            px: 3,
          }}
        >
          <TextField
            fullWidth
            label="キーワード（例：カフェ・ラーメン・レストラン）"
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
          />
        </Box>
        <Button color="inherit" className={styles.okiuBtn} onClick={onSearchClick}>
          検索
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
