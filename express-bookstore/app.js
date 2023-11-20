// app.js

const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files from the "public" directory

const ExpressError = require("./expressError");
const bookRoutes = require("./routes/books");

app.use("/books", bookRoutes);

// 404 handler
app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

// General error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
