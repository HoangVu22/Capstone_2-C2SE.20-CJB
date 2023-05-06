const {messages} = require('../models')

module.exports = (io, socket) => {
  socket.on("send_message", async ({sender, receiver , message}) => {
    const messageObject = await messages.create({
      from_id: sender,
      to_id: receiver,
      content: message
    })
    socket.broadcast.emit("receive_message", messageObject.content);
  });
};
