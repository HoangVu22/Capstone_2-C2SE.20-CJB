const { messages, friends, users } = require("../models");

module.exports = async (io, socket) => {
  const userId = socket.handshake.auth.token;

  socket.on("send-message", async ({ receiver, message }) => {
    const messageObject = await messages.create({
      from_id: userId,
      to_id: receiver,
      content: message,
    });
    socket.broadcast.emit("receive-message", messageObject.content);
  });

  socket.on("friends", async () => {
    const yourFriends = await friends.findAll({
      where: {
        user_id: userId,
      },
      attributes: ["friend_id"],
    });
    const yourFriendInfos = await Promise.all(
      yourFriends.map(async (friend) => await users.findByPk(friend.friend_id))
    );
    socket.emit("friends", yourFriendInfos);
  });
};
