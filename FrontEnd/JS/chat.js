$(document).ready(function () {
  $("#action_menu_btn").click(function () {
    $(".action_menu").toggle();
  });
});

const socket = io("http://localhost:3002/chat");
const messageInput = document.querySelector(".type_msg");
const sendButton = document.querySelector(".send_btn");
const messages = document.querySelector(".msg_card_body");

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
    socket.emit("send_message", messageInput.value);
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
