const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") {
    headerForm.style.display = "block";
  } else {
    headerForm.style.display = "none";
  }
};

// --------- ẩn hiện thông báo----------
const faBell = document.querySelector(".fa-bell");
const containerNotification = document.querySelector(".container-notification");

faBell.onclick = function () {
  if (containerNotification.style.display === "none") {
    containerNotification.style.display = "block";
  } else {
    containerNotification.style.display = "none";
  }
};
