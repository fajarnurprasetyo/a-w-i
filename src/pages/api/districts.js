import prisma from "../../prisma";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async ({ query }, res) => {
  const regencyId = parseInt(query.regencyId);
  // const search = query.search;
  // const skip = parseInt(query.skip);
  // const take = parseInt(query.take);

  const check1 = !isNaN(regencyId);
  // const check2 = typeof search === 'string' && search.length > 0;
  // const check3 = !isNaN(skip) && !isNaN(take);

  if (!check1) {
    res.status(400).end();
    return;
  }

  const districts = await prisma.district.findMany({
    where: { regencyId }
  });
  res.json(districts);
}
