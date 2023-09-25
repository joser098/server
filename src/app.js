const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/index");

const app = express();
const whitelist = [
  "http://localhost:5173",
  "jxsejaramillo.com",
  "http://localhost:3000",
];

app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.disable("x-powered-by");

app.use("/", indexRouter);

module.exports = app;
