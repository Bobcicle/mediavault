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

async function deleteBookmark(req, res) {
  try {
    await service.deleteBookmark(Number(req.params.id));

    res.sendStatus(204);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

async function updateBookmark(req, res) {
  try {

console.log("Params:", req.params);
console.log("Body:", req.body);
    const bookmark = await service.updateBookmark(
      Number(req.params.id),
      req.body
    );

    res.json(bookmark);

  } catch (error) {
  console.error(error);

  res.status(500).json({
    message: error.message,
    code: error.code,
    meta: error.meta,
  });
}
}

module.exports = {
  getBookmarks,createBookmark,deleteBookmark,updateBookmark,
};
