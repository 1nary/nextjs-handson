import React from 'react';
import getConfig from 'next/config';
import { List, ListItem, ListItemText } from '@mui/material';

const fetchGenres = async () => {
  const { API_HOST } = getConfig().publicRuntimeConfig;

  const host = process.browser ? '' : API_HOST;
  const res = await fetch(`${host}/api/genres`);
  return await res.json();
};

const Genres = ({ genres }) => {
  return (
    <List>
      {genres.map(({ id, name, code }) => {
        return (
          <ListItem key={id}>
            <ListItemText primary={name} secondary={code} />
          </ListItem>
        );
      })}
    </List>
  );
};

export const getServerSideProps = async (req) => {
  const genres = await fetchGenres();

  return {
    props: {
      genres,
    },
  };
};

export default Genres;
