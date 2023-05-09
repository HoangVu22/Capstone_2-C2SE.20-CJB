// const headerNavForm = document.querySelector(".header-nav-form");
// const headerForm = document.querySelector(".header-form");
// const headerFormLogin = headerNavForm.querySelector(".header-form-login");
// const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const socketRoom = io("http://localhost:3002/room", {
  auth: {
    token: localStorage.getItem("id"),
  },
});

socketRoom.on("connect", () => {
  localStorage.setItem("socketId", socketRoom.id);
});

// if (login) {
//   headerNavForm.onclick = function () {
//     if (headerForm.style.display === "none") {
//       headerForm.style.display = "block";
//       headerFormLogout.style.display = "block";
//       headerFormLogin.style.display = "none";
//     } else {
//       headerForm.style.display = "none";
//       headerFormLogout.style.display = "none";
//     }
//   };
// } else {
//   headerNavForm.onclick = function () {
//     if (headerForm.style.display === "none") {
//       headerForm.style.display = "block";
//       headerFormLogin.style.display = "block";
//       headerFormLogout.style.display = "none";
//     } else {
//       headerForm.style.display = "none";
//       headerFormLogin.style.display = "none";
//     }
//   };
// }

// const z = document.querySelector.bind(document);
// const logout = z(".form-logout");
// logout.onclick = () => {
//   alert("Bạn chắc chắn muốn thoát ?");
//   window.localStorage.clear();
//   window.location.reload(true);
//   window.location.href = "http://localhost:3000/home.html";
// };

// const goBackProfile = z(".group-icon");

// goBackProfile.onclick = () => {
//   window.location.href = "http://localhost:3000/profile.html";
// };

// const names = document.getElementsByClassName(" header-name1");
// const avatarUser = document.getElementById("avatar_user");
// if (login) {
//   names[0].innerText = login.user_info.name;
//   avatarUser.src = login.user_info.user_profile[0].avatar;
// }

// ----------- ẩn hiện create group-----------
const group = document.querySelector(".group");
const CRBody = document.querySelector("#CR-body");
const roomClose = document.querySelector(".room-close i");
const classC = document.querySelector(".class");
roomClose.onclick = function () {
  CRBody.style.display = "none";
  classC.style.display = "none";
};
group.onclick = function () {
  if (!login) {
    createToast("warn", "Bạn chưa đăng nhập");
    return;
  } else {
    CRBody.style.display = "block";
    classC.style.display = "block";
  }
};

// --------------- create room ------------------

const createRoom = $(".btn-create");
const roomName = $("#name-room");
roomName.onchange = (e) => {
  console.log(e.target.value);
};
const roomDescription = $("#description-room");
if (login) {
  createRoom.onclick = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".form-control");
    const requestValues = {};

    inputs.forEach((item) => {
      requestValues[item.attributes.name.value] = item.value;
    });
    fetch("http://127.0.0.1:8000/api/personal/room/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner_id: login.user_info.user_profile[0].user_id,
        name: roomName.value,
        description: roomDescription.value,
      }),
    })
      .then((response) => response.json())
      .then((val) => {
        createToast("success");
        setTimeout(() => {
          window.location.reload(true);
        }, 5000);
      })
      .catch((error) => {
        createToast("error");
      });
  };
}

// ------------------------- render room --------------------------------------

const api = "http://127.0.0.1:8000/api/personal/room/all";

var sliderFind = $(".group-content");

var htmlss = "";
function getTours() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const tours = data.allRoom;
      htmlss = tours
        .map((tour) => {
          return `<div class="group-item">
           <div class="group-img">
               <img src="../IMAGES/slides/slide-5.png" alt="">
           </div>
           <div class="group-info">
               <h4 class="group-info-name">${tour.name}</h4>
               <p>30 thành viên</p>
               <button onclick="joinRoom(${tour.id})">Tham gia</button>
           </div>
       </div>`;
        })
        .join("");
      return (sliderFind.innerHTML = htmlss);
    });
}

getTours();

function joinRoom(idRoom) {
  fetch("http://127.0.0.1:8000/api/personal/room/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: login.user_info.user_profile[0].user_id,
      room_id: idRoom,
    }),
  })
    .then((response) => response.json())
    .then((val) => {
      createToast("success", val.msg);
      socketRoom.emit("join-room", {
        roomId: idRoom,
        joiner: login.user_info.user_profile[0].user_id,
      });
    })
    .catch((error) => {
      createToast("error");
    });
}

socketRoom.on("join-room", (users) => {
  console.log(users);
});

// -=-------------------- message toast ----------------------------
const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");
// Object containing details for different types of toasts
const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success: Create Room success...",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: Create Room error....",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: This is an information toast.",
  },
};
const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
};
const createToast = (id, message) => {
  // Getting the icon and text for the toast based on the id passed
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li"); // Creating a new 'li' element for the toast
  toast.className = `toast ${id}`; // Setting the classes for the toast
  // Setting the inner HTML for the toast
  toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${message || text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast); // Append the toast to the notification ul
  // Setting a timeout to remove the toast after the specified duration
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};
