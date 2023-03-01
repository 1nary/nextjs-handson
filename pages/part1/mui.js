import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Mui = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" noValidate>
        <TextField label="キーワードを入力してください" variant="standard" margin="normal" fullWidth />
        <Button variant="contained" margin="normal" fullWidth>
          検索
        </Button>
      </Box>
    </Container>
  );
};

export default Mui;