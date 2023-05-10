$(document).ready(function () {
  $("#action_menu_btn").click(function () {
    $(".action_menu").toggle();
  });
});

const socket = io("http://localhost:3002/chat", {
  auth: {
    token: localStorage.getItem("id"),
  },
});

const messageInput = document.querySelector(".type_msg");
const sendButton = document.querySelector(".send_btn");
const messages = document.querySelector(".msg_card_body");
const contacts = document.querySelector(".contacts");

const targetFriendImg = document.querySelector(".target-friend-img");
const targetFriendInfo = document.querySelector(".target-friend-info");

let myFriends = [];
let targetFriend = null;
socket.emit("friends");
socket.on("friends", (friends) => {
  myFriends = friends;
  targetFriend = friends[0];
  renderMessages(targetFriend.id);

  console.log(targetFriend.id);
  targetFriendInfo.querySelector("span").innerText = targetFriend.name;
  contacts.innerHTML = myFriends.map(
    (friend) =>
      `<li class="active">
    <div class="friend d-flex bd-highlight" data-userId="${friend.id}">
        <div class="img_cont">
            <img src=${
              friend.avatar ||
              "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            }
                class="rounded-circle user_img">
            <span class="online_icon"></span>
        </div>
        <div class="user_info">
            <span>${friend.name}</span>
            <p>${friend.name} is online</p>
        </div>
    </div>
  </li>`
  );
  const friendsDom = document.querySelectorAll(".friend");
  friendsDom.forEach((friend) => {
    friend.onclick = () => {
      const userId = friend.dataset.userid;
      fetch(`http://localhost:3002/api/client/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          targetFriend = data;
          targetFriendInfo.querySelector("span").innerText = data.name;
          renderMessages(data.id);
        });
    };
  });
});

const renderMessages = async (id) => {
  const currentUser = Number(localStorage.getItem("id"));
  const mess = (
    await Promise.all([
      fetch(
        `http://localhost:3002/api/client/messages/${id}/sender/${currentUser}`
      ).then((res) => res.json()),
      fetch(
        `http://localhost:3002/api/client/messages/${currentUser}/sender/${id}`
      ).then((res) => res.json()),
    ])
  )
    .reduce((prev, next) => {
      return [...prev, ...next];
    }, [])
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  messages.innerHTML = mess
    .map((message) => {
      if (message.to_id === currentUser) {
        return `<div class="d-flex justify-content-start mb-4">
      <div class="img_cont_msg">
        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
      </div>
      <div class="msg_cotainer">
        ${message.content}
        <span class="msg_time">${new Date(
          message.createdAt
        ).toLocaleString()}</span>
      </div>
    </div>`;
      }
      if (message.to_id === id) {
        return `
    <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">
            ${message.content}
            <span class="msg_time_send">${new Date(
              message.createdAt
            ).toLocaleString()}</span>
        </div>
    </div>`;
      }
    })
    .join("");
};

sendButton.onclick = () => {
  if (messageInput.value) {
    const targetMessage = `
    <div class="d-flex justify-content-end mb-4">
        <div class="msg_cotainer_send">
            ${messageInput.value}
            <span class="msg_time_send">9:10 AM, Today</span>
        </div>
    </div>`;
    messages.innerHTML += targetMessage;
    socket.emit("send-message", {
      receiver: targetFriend.id,
      message: messageInput.value,
    });
    messageInput.value = "";
  }
};

socket.on("receive-message", (message) => {
  const targetMessage = `<div class="d-flex justify-content-start mb-4">
      <div class="img_cont_msg">
        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
      </div>
      <div class="msg_cotainer">
        ${message}
        <span class="msg_time">8:40 AM, Today</span>
      </div>
    </div>`;
  messages.innerHTML += targetMessage;
});
