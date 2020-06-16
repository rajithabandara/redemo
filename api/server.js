const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(require("morgan")("dev"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is up");
});

app.listen(port, () => {
  console.log("listening on " + port);
});
