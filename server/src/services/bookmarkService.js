const repository = require("../repositories/bookmarkRepository");

async function getBookmarks() {
  return repository.getAll();
}

module.exports = {
  getBookmarks,
};
