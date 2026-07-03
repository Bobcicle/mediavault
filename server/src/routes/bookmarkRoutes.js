const express = require("express");

const controller = require("../controllers/bookmarkController");

const router = express.Router();

router.get("/", controller.getBookmarks);

module.exports = router;
