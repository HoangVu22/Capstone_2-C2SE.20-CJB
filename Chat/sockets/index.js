const chatHandler = require("../handlers/chatHandler");
const roomHandler = require("../handlers/roomHandler");

module.exports = (io) => {
  const chatNamespace = io.of("/chat");
  const roomNamespace = io.of("/room");

  chatHandler(chatNamespace);
  roomHandler(roomNamespace);
};
