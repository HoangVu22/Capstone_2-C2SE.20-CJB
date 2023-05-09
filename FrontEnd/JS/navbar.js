(() => {
  const navbar = () => {
    return `<header class="header">
    <div class="container" style="background-color: rgba(2, 127, 255, 1); padding: 10px 0">
        <a href="home.html" class="logo"> <img src="IMAGES/logo/logo-removebg-preview.png" alt=""> </a>
  
        <ul class="nav-menu">
            <li> <a href="home.html" class="nav-link">Home</a> </li>
            <li> <a href="bookTour.html" class="nav-link">Tours</a> </li>
            <li> <a href="createTrip.html" class="nav-link">Tạo chuyến đi</a> </li>
            <li> <a href="group.html" class="nav-link">Group</a> </li>
            <li> <a href="TS-register.html" class="nav-link">Trở thành nhà cung cấp</a> </li>
            <li><i class="fa-solid fa-bell"></i>
                <div style="display: none;" class="container-notification">
                    <div class="wrap-notification">
                        <div class="header-notification">
                            <p>Thông báo</p>
                        </div>
                        <div class="content-notification">
                            <div style="display: none;" class="content-notification-empty">
                                <img src="https://static.boosty.to/assets/images/bell-light.gNKz9.svg" alt="">
                                <div class="empty-title">
                                    <h3>Chưa có thông báo nào</h3>
                                    <p>Tất cả thông báo sẽ có ở đây</p>
                                </div>
                            </div>
                            <div class="content-notication-show">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
  
            <div class="header-nav-form">
                <div class="header-nav-icon">
                    <i class="fa-solid fa-user user-icon"></i>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="header-form">
                    <div class="header-form-login">
                        <ul>
                            <li><a href="login-register.html">Đăng nhập</a></li>
                            <li><a href="login-register.html">Đăng ký</a></li>
                        </ul>
                    </div>
                    <div class="header-form-logout">
                        <div class="content-logout">
                            <a href="profile.html" class="avatar-login">
                                <div class="header-form-avatar">
                                    <img src="" alt="" id="avatar_user">
                                    <div class="header-name">
                                        <span class="header-name1"></span>
                                        <p>Xem hồ sơ</p>
                                    </div>
                                </div>
                            </a>
                            <span class="drop-line"></span>
                            <div class="header-form-booked">
                                <i class="fa-sharp fa-solid fa-clock-rotate-left"></i>
                                <span>Chuyến đi của tôi</span>
                            </div>
                            <div class="header-form-loved">
                                <i class="fa-regular fa-heart"></i>
                                <span>Lịch sử chuyến đi</span>
                            </div>
                            <div class="form-logout">Đăng xuất</div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
  </header>`;
  };

  const renderNav = document.getElementById("render-nav");
  renderNav.innerHTML = navbar();

  const notificationContainer = document.querySelector(
    ".content-notication-show"
  );

  function verfiyJoinRoom(notiId, verify) {
    const childs = notificationContainer.querySelectorAll(".notification-item");
    for (const child of childs) {
      if (Number(child.dataset.notiid) === notiId) {
        notificationContainer.removeChild(child);
        break;
      }
    }
    socket.emit("verify-join-room", { id: notiId, value: verify });
  }

  const socket = io("http://localhost:3002/room", {
    auth: {
      token: localStorage.getItem("id"),
    },
  });

  socket.on("verify-join-room", ({ message, room }) => {
    const notification = `<div class="wrap-show-content">
          <div class="show-avatar">
              <img src="IMAGES/slides/slide-1.jpg" alt="">
          </div>
          <div class="show-content">
              <div class="show-content-top">
                  <p>${message}<b> ${room}</b></p>
                  <p class="show-content-top-time">2 giờ trước</p>
              </div>
          </div>
        </div>`;

    notificationContainer.innerHTML += notification;
  });

  socket.on("join-room", (data) => {
    const notification = `<div class="wrap-show-content">
        <div class="show-avatar">
            <img src="IMAGES/slides/slide-1.jpg" alt="">
        </div>
        <div class="show-content">
            <div class="show-content-top">
                <p><b>${data.who}</b> ${data.message}</p>
                <p class="show-content-top-time">2 giờ trước</p>
                <div class="show-content-top-btn">
                    <button class="confirm">Xác nhận</button>
                    <button class="denied">Từ chối</button>
                </div>
            </div>
        </div>
      </div>`;
    const html = document.createElement("div");
    html.classList.add("notification-item");
    html.dataset.notiid = data.verifyId;
    html.innerHTML = notification;
    const confirmButton = html.querySelector(".confirm");
    const deniedButton = html.querySelector(".denied");
    confirmButton.addEventListener("click", () =>
      verfiyJoinRoom(data.verifyId, true)
    );
    deniedButton.addEventListener("click", () =>
      verfiyJoinRoom(data.verifyId, false)
    );
    notificationContainer.appendChild(html);
  });

  const headerNavForm = document.querySelector(".header-nav-form");
  const headerForm = document.querySelector(".header-form");
  const headerFormLogin = headerNavForm.querySelector(".header-form-login");
  const headerFormLogout = document.querySelector(".header-form-logout");
  const login = JSON.parse(window.localStorage.getItem("login"));

  if (login) {
    headerNavForm.onclick = function () {
      if (headerForm.style.display === "none") {
        headerForm.style.display = "block";
        headerFormLogout.style.display = "block";
        headerFormLogin.style.display = "none";
      } else {
        headerForm.style.display = "none";
        headerFormLogout.style.display = "none";
      }
    };
  } else {
    headerNavForm.onclick = function () {
      if (headerForm.style.display === "none") {
        headerForm.style.display = "block";
        headerFormLogin.style.display = "block";
        headerFormLogout.style.display = "none";
      } else {
        headerForm.style.display = "none";
        headerFormLogin.style.display = "none";
      }
    };
  }
  const names = document.getElementsByClassName(" header-name1");
  const avatarUser = document.getElementById("avatar_user");
  if (login) {
    names[0].innerText = login.user_info.name;
    avatarUser.src = login.user_info.user_profile[0].avatar;
  }

  const logout = document.getElementsByClassName("form-logout");
  logout[0].onclick = () => {
    alert("Bạn chắc chắn muốn thoát ?");
    window.localStorage.clear();
    window.location.reload(true);
    window.location.href = "http://localhost:3000/home.html";
  };

  // --------- ẩn hiện thông báo----------

  const faBell = document.querySelector(".fa-bell");
  const containerNotification = document.querySelector(
    ".container-notification"
  );

  faBell.onclick = function () {
    if (containerNotification.style.display === "none") {
      containerNotification.style.display = "block";
    } else {
      containerNotification.style.display = "none";
    }
  };
})();
