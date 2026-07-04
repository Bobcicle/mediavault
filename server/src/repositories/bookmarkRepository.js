const prisma = require("../config/prisma");

async function getAll() {
  return prisma.bookmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function create(data) {
  return prisma.bookmark.create({
    data,
  });
}

module.exports = {
  getAll,
  create,
};
