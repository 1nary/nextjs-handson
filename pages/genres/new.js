import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const createGenre = async ({ code, name }) => {
  const { API_HOST } = getConfig().publicRuntimeConfig;

  const host = process.browser ? '' : API_HOST;
  const res = await fetch(`${host}/api/genres`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, name }),
  });
  return await res.json();
};

const New = () => {
  const router = useRouter();
  const [genre, setGenre] = React.useState({
    name: '',
    code: '',
  });

  return (
    <div>
      <FormControl>
        <TextField
          label="ジャンル名を入力してください"
          variant="standard"
          margin="normal"
          fullWidth
          value={genre.name}
          onChange={(event) => {
            setGenre({
              ...genre,
              name: event.target.value,
            });
          }}
        />
        <TextField
          label="ジャンルコードを入力してください"
          variant="standard"
          margin="normal"
          fullWidth
          value={genre.code}
          onChange={(event) => {
            setGenre({
              ...genre,
              code: event.target.value,
            });
          }}
        />
      </FormControl>
      <Button
        onClick={async () => {
          const createdGenre = await createGenre(genre);
          router.push(`/genres/${createdGenre.id}`);
        }}
      >
        作成
      </Button>
    </div>
  );
};

export default New;
