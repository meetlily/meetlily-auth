import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getComponentTemplateById = async (id) => {
  return prisma.models.componentTemplate.findUnique({ where: { id } });
};

export const saveComponentTemplate = async (template) => {
  return prisma.models.componentTemplate.create({ data: template });
};