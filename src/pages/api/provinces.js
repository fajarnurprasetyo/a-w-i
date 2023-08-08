import prisma from "../../prisma";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async ({ query }, res) => {
  if (query.search) {
    if (typeof query.search !== 'string') {
      res.status(400).end();
      return;
    }

    const provinces = await prisma.province.findMany({
      where: { name: { contains: query.search } }
    });
    res.json(provinces);
    return;
  }

  const provinces = await prisma.province.findMany();
  res.json(provinces);
}
