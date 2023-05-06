$(document).ready(function () {
  $("#action_menu_btn").click(function () {
    $(".action_menu").toggle();
  });
});

const socket = io("http://localhost:3002/chat");
const messageInput = document.querySelector(".type_msg");
const sendButton = document.querySelector(".send_btn");
const messages = document.querySelector(".msg_card_body");
const contacts = document.querySelector('.contacts')

// in fetch
const mockFriends = [
  {
    user_id: "1",
    name: "Viet Anh",
    avatar: ""
  },
  {
    user_id: "2",
    name: "Thuy Hang",
    avatar: ""
  },
  {
    user_id: "3",
    name: "Le Truong",
    avatar: ""
  },
  {
    user_id: "4",
    name: "Hoang Vu",
    avatar: ""
  }
]

const targetFriend = {}

contacts.innerHTML = mockFriends.map(friend => (
  `<li class="active">
  <div class="friend d-flex bd-highlight">
      <div class="img_cont">
          <img src=${friend.avatar || "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"}
              class="rounded-circle user_img">
          <span class="online_icon"></span>
      </div>
      <div class="user_info">
          <span>${friend.name}</span>
          <p>Kalid is online</p>
      </div>
  </div>
</li>`
))

const friends = document.querySelectorAll('.friend')
friends.forEach(friend => {
  friend.onclick = () => {
    const targetFriendImg = document.querySelector('.target-friend-img')
    const targetFriendInfo = document.querySelector('.target-friend-info')
    // targetFriendInfo.querySelector('span').innerText = 
  }
})
// => in fetch

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
    socket.emit("send_message", {sender: 1, receiver: 2, message: messageInput.value});
    messageInput.value = "";
  }
};

socket.on("receive_message", (message) => {
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
