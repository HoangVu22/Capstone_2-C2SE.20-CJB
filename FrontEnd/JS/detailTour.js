const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = window.localStorage.getItem("login");

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") {
    headerForm.style.display = "block";
  } else {
    headerForm.style.display = "none";
  }
};

// ---------------------------------------