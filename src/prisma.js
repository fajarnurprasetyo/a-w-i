import { PrismaClient } from "@prisma/client";

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

/** @type {PrismaClient} */
export default global.prisma;
