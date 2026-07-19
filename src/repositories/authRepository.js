const prisma = require("../configs/prisma");

const findByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

const create = async (data) => {
  return prisma.user.create({
    data,
  });
};

const findById = (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

module.exports = {
  findById,
  findByEmail,
  create,
};
