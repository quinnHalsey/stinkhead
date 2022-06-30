/* eslint-disable no-unused-vars */

const express = require("express");
const morgan = require("morgan");

const path = require("path");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(port, () => {
  console.log(`Serving up competition on port ${port}`);
});
