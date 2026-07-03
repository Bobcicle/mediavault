const express = require("express");

const bookmarkRoutes = require("./routes/bookmarkRoutes");

const app = express();

app.use(express.json());

app.use("/api/bookmarks", bookmarkRoutes);

module.exports = app;
