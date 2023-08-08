import prisma from "../../prisma";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async ({ query }, res) => {
  const provinceId = parseInt(query.provinceId);
  const search = query.search;
  const skip = parseInt(query.skip);
  const take = parseInt(query.take);

  const check1 = !isNaN(provinceId);
  const check2 = typeof search === 'string' && search.length > 0;

  if (check1 === check2) {
    res.status(400).end();
    return;
  }

  if (check1) {
    const regencies = await prisma.regency.findMany({
      where: { provinceId }
    });
    res.json(regencies);
    return;
  }

  const regencies = await prisma.regency.findMany({
    where: { name: { contains: search } },
    skip: !isNaN(skip) ? skip : 0,
    take: !isNaN(take) ? take : 20,
  });
  res.json(regencies);
}
