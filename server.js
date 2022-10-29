const express = require("express");
var cors = require('cors')
const PORT = process.env.PORT || 3500;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const data = {
    slackUsername: "UnknownCode",
    backend: true,
    age: 23,
    bio: "Cruiseeee",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});