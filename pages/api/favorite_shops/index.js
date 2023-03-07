import { PrismaClient } from '@prisma/client';

const createFavoriteShop = async ({ gourme_identifier }) => {
  const prisma = new PrismaClient();
  const favorite_shop = await prisma.favorite_shops.create({
    data: {
      gourme_identifier
    },
  });
  return favorite_shop;
};

const favoriteShops = async (req, res) => {
  switch (req.method) {
    case 'POST':
      return res.status(201).json(await createFavoriteShop(req.body));
    default:
      return res.status(405).end();
  }
};

export default favoriteShops;
