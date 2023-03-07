import { PrismaClient } from '@prisma/client';

const getFavoriteShop = async (id) => {
  const prisma = new PrismaClient();
  const gourmet = await prisma.favorite_shops.findUnique({
    where: {
      id,
    },
  });

  return gourmet;
};

const favoriteShop = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getFavoriteShop(parseInt(req.query.id, 10)));
      break;

    default:
      res.status(405).end();
      break;
  }
};

export default favoriteShop;
