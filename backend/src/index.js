const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");

const { setupWebSocket } = require("./websocket");
const routes = require("./routes");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://lucasfgs:895b88@todoapp-hsbsr.mongodb.net/TodoApp?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);
