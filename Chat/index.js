const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const chatHandler = require("./handlers/chatHandler");
const routing = require("./routers");

const app = express();
const httpServer = createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["get", "post"],
  },
});

const chatNamespace = io.of("/chat");
chatNamespace.on("connection", (socket) => {
  console.log(`user connection ${socket.id}`);
  chatHandler(chatNamespace, socket);

  chatNamespace.on("disconnect", () => {
    console.log(`user disconnect ${socket.id}`);
  });
});

routing(app);

httpServer.listen(3002, () => {
  console.log("chat server is running on port 3002");
});
