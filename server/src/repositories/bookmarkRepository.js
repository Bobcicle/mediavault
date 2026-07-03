const prisma = require("../config/prisma");

async function getAll() {
  return prisma.bookmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

module.exports = {
  getAll,
};
