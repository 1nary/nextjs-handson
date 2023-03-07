import { PrismaClient } from '@prisma/client';

const getFavoriteShop = async (gourme_identifier) => {
  const prisma = new PrismaClient();
  const favorite_shop = await prisma.favorite_shops.findUnique({
    where: {
      gourme_identifier,
    },
  });

  return favorite_shop;
};

const deleteFavoriteShop = async (gourme_identifier) => {
  const prisma = new PrismaClient();
  await prisma.favorite_shops.delete({
    where: {
      gourme_identifier,
    },
  });
};

const favoriteShop = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await getFavoriteShop(req.query.id));
      break;

    case 'DELETE':
      await deleteFavoriteShop(req.query.id);
      return res.status(204).end();
      break;

    default:
      res.status(405).end();
      break;
  }
};

export default favoriteShop;
