const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));
  
if(login){
  headerNavForm.onclick = function () {
    if (headerForm.style.display === "none") {
      headerForm.style.display = "block";
      headerFormLogout.style.display = "block";
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
    } else {
      headerForm.style.display = "none";
      headerFormLogin.style.display = "none";
    }
  };
}

const logout = document.getElementsByClassName('form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://127.0.0.1:5503/Capstone_2-C2SE.20-CJB/FrontEnd/HTML/login-register.html';
}

const names = document.getElementsByClassName('header-name1');
const avatarUser = document.getElementById("avatar_user");
if(login.msg === "Đăng nhập thành công"){
  names[0].innerText = login.user_info.name;
  avatarUser.src = login.user_info.user_profile[0].avatar;
} else {
  names[0].innerText = login.user_info.name;
  avatarUser[0].src = login.user_info.user_profile[0].avatar;
}

// ---------------------------------------



const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tab = $(".createTrip-wraper");
const tab1 = $(".createTrip-wraper1");
const btn = $(".button1-btn");
const btn1 = $(".button2-btn");
const goBack = $(".goBack");
const startCreateTrip = $(".startCreateTrip");
btn.style.backgroundColor = "#0000ff4a";

btn.onclick = () => {
  tab.style.display = "block";
  tab1.style.display = "none";
  btn.style.backgroundColor = "#0000ff4a";
  btn1.style.backgroundColor = "white";
};

const formNextBtn = $(".form-next button");
formNextBtn.onclick = () => {
  tab.style.display = "none";
  tab1.style.display = "block";
  btn.style.backgroundColor = "white";
  btn1.style.backgroundColor = "#0000ff4a";
  tab1.style.transition = "all 0.9 ease";
  tab1.style.marginTop = "90px";
};

goBack.onclick = () => {
  tab.style.display = "block";
  tab1.style.display = "none";
  btn.style.backgroundColor = "#0000ff4a";
  btn1.style.backgroundColor = "white";
};

btn1.onclick = () => {
  tab.style.display = "none";
  tab1.style.display = "block";
  btn.style.backgroundColor = "white";
  btn1.style.backgroundColor = "#0000ff4a";
  tab1.style.transition = "all 0.9 ease";
  tab1.style.marginTop = "102px";
};
