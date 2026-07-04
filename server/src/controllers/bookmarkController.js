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


async function createBookmark(req, res) {
  try {
    const bookmark = await service.createBookmark(req.body);

    res.status(201).json(bookmark);

  } catch (error) {
  console.error(error);

  res.status(500).json({
    error: "Internal Server Error",
  });
}





}

module.exports = {
  getBookmarks,createBookmark,
};
