import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};