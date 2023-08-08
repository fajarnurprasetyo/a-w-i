import prisma from "../../prisma";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async ({ query }, res) => {
  const provinceId = parseInt(query.provinceId);
  // const search = query.search;
  // const skip = parseInt(query.skip);
  // const take = parseInt(query.take);

  const check1 = !isNaN(provinceId);
  // const check2 = typeof search === 'string' && search.length > 0;
  // const check3 = !isNaN(skip) && !isNaN(take);

  if (!check1) {
    res.status(400).end();
    return;
  }

  const regencies = await prisma.regency.findMany({
    where: { provinceId }
  });
  res.json(regencies);
}
