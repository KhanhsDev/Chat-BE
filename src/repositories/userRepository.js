const prisma = require("../configs/prisma");

const getAll = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

module.exports = {
  getAll,
};
