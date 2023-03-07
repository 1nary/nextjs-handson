import getConfig from 'next/config';
import { LAT_CAMPUS, LNG_CAMPUS, SHOP_COUNT } from '/config/constants';

const shops = async (req, res) => {
  const { HOTPEPPER_API_KEY } = getConfig().serverRuntimeConfig;

  const query = new URLSearchParams();
  query.set('key', HOTPEPPER_API_KEY);
  query.set('lat', LAT_CAMPUS);
  query.set('lng', LNG_CAMPUS);
  query.set('count', SHOP_COUNT);
  query.set('range', '5');
  query.set('format', 'json');
  if (req.query.keyword) query.set('keyword', req.query.keyword);

  const response = await fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?${query.toString()}`);
  const data = await response.json();

  return res.json(data.results.shop);
};

export default shops;
