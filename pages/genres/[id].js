import React from 'react';
import getConfig from 'next/config';
import Typography from '@mui/material/Typography';

const fetchGenre = async (id) => {
  const { API_HOST } = getConfig().publicRuntimeConfig;

  // const query = new URLSearchParams();
  // if (id) query.set('id', id);

  const host = process.browser ? '' : API_HOST;
  const res = await fetch(`${host}/api/genres/${id}`);
  return await res.json();
};

const GenresId = ({ genre }) => {
  if (!genre) return <div>notfound</div>;
  return (
    <div>
      <Typography>{genre.name}</Typography>
      <Typography>{genre.code}</Typography>
    </div>
  );
};

export const getServerSideProps = async (req) => {
  const genre = await fetchGenre(req.query.id);

  return {
    props: {
      genre,
    },
  };
};

export default GenresId;
