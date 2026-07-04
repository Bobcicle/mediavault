const express = require("express");
const cors = require("cors");

const bookmarkRoutes = require("./routes/bookmarkRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/bookmarks", bookmarkRoutes);

module.exports = app;
