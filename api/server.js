const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(require("morgan")("dev"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is up");
});

app.get("/randomint", (req, res) => {
  let randomint = Math.round(Math.random() * 50000) % 20;
  let payload = { randomint };
  res.json(payload);
});

app.get("/timeinseconds", (req, res) => {
  let timeinseconds = Math.round(new Date().getSeconds() / 10); //5; //Math.round(Math.random() * 50000) % 20;
  let payload = { timeinseconds };
  res.json(payload);
});

app.listen(port, () => {
  console.log("listening on " + port);
});
