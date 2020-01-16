const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://lucasfgs:895b88@todoapp-hsbsr.mongodb.net/TodoApp?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000);
