const { rooms, users, members } = require("../models");

module.exports = (io) => {
  let connectUsers = {};

  io.on("connection", (socket) => {
    console.log(`------- user connection ${socket.id}`);

    const userId = socket.handshake.auth.token;

    connectUsers[userId] = socket;

    const existing = (id) => {
      if (connectUsers[id]) {
        return true;
      } else {
        return false;
      }
    };

    socket.on("verify-join-room", async ({ id, value }) => {
      await members.update(
        {
          is_confirm: value,
        },
        {
          where: {
            id,
          },
        }
      );
      const member = await members.findByPk(id);
      const room = await rooms.findByPk(member.room_id);
      // create new notification on database
      if (existing(member.user_id)) {
        connectUsers[member.user_id].emit("verify-join-room", {
          message: value
            ? "Bạn đã được xác nhận tham gia vào nhóm"
            : "Yêu cầu tham gia nhóm của bạn bị từ chối",
          room: room.name,
        });
      }
    });

    socket.on("join-room", async ({ roomId, joiner }) => {
      const room = await rooms.findByPk(roomId);
      const member = await members.findOne({
        where: {
          user_id: joiner,
          room_id: roomId,
          is_confirm: false,
        },
      });
      if (member) {
        const user = await users.findByPk(joiner);
        // create new notification on database
        if (connectUsers[room.room_owner]) {
          connectUsers[room.room_owner].emit("join-room", {
            who: user.name,
            message: `đang muốn tham gia vào phòng của bạn`,
            verifyId: member.id,
          });
        }
      }
    });

    socket.on("disconnect", () => {
      console.log(`----------- user disconnect ${socket.id}`);
      delete connectUsers[userId];
    });
  });
};
