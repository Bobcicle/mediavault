const repository = require("../repositories/bookmarkRepository");

async function getBookmarks() {
  return repository.getAll();
}

async function createBookmark(data) {
  return repository.create(data);
}

module.exports = {
  getBookmarks,
  createBookmark,
};
