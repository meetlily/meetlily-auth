// services/api.js
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend server URL
});

const prisma = new PrismaClient();

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};