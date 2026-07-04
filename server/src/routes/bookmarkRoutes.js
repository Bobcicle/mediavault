const express = require("express");

const controller = require("../controllers/bookmarkController");

const router = express.Router();

router.get("/", controller.getBookmarks);
router.post("/", controller.createBookmark);


module.exports = router;
