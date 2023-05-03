module.exports = (io, socket) => {
  socket.on("send_message", (message) => {
    socket.broadcast.emit("receive_message", message);
  });
};
