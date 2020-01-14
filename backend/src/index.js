const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("pinto"));

app.listen(5000);
