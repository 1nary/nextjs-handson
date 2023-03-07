import getConfig from 'next/config';

export const fetchGourmets = async (keyword) => {
  const { API_HOST } = getConfig().publicRuntimeConfig;

  const query = new URLSearchParams();
  if (keyword) query.set('keyword', keyword);

  const host = process.browser ? '' : API_HOST;
  const res = await fetch(`${host}/api/gourmets?${query.toString()}`);
  return await res.json();
};
