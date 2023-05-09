const { rooms, users, members } = require("../models");

module.exports = (io) => {
  let connectUsers = {};

  io.on("connection", (socket) => {
    console.log(`------- user connection ${socket.id}`);

    const userId = socket.handshake.auth.token;

    connectUsers[userId] = socket;

    socket.on("join-room", async ({ roomId, joiner }) => {
      const room = await rooms.findByPk(roomId);
      const member = await members.findOne({
        where: {
          user_id: joiner,
          room_id: roomId,
          is_confirm: false,
        },
      });
      const user = await users.findByPk(joiner);
      connectUsers[room.room_owner].emit("join-room", {
        who: user.name,
        message: `đang muốn tham gia vào phòng của bạn`,
        verifyId: member.id,
      });
    });

    socket.on("disconnect", () => {
      console.log(`----------- user disconnect ${socket.id}`);
      delete connectUsers[userId];
    });
  });
};
