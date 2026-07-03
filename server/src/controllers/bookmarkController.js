const service = require("../services/bookmarkService");

async function getBookmarks(req, res) {
  try {
    const bookmarks = await service.getBookmarks();

    res.json(bookmarks);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

module.exports = {
  getBookmarks,
};
