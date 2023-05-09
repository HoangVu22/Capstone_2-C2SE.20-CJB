const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const routing = require("./routers");
const socket = require("./sockets");

const app = express();
const httpServer = createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["get", "post"],
  },
});
socket(io);
routing(app);

httpServer.listen(3002, () => {
  console.log("chat server is running on port 3002");
});
