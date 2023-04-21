// ----- my trip----------
new Swiper(".blog-slider", {
  effect: "fade",
});
// ---------------------------

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
  avatarUser.src = login.user_info.user_profile[0].avatar;
}
// ---------------------------------------

let endDate = new Date("4/20/2023 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDate - now;
  let day = Math.floor(distance / (24 * 60 * 60 * 1000));
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  document.getElementById("day").innerText = day;
  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("seconds").innerText = seconds;
  if (distance <= 0) {
    clearInterval(check);
  }
}, 1000);

// ------------ slide 1 --------------

$(".slides2").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
});

const z = document.querySelector.bind(document);
const slickPre = z(".fa-chevron-left");
const slickNext = z(".fa-chevron-right");
const findSlickPrev = z(".prev1");
const findSlickNext = z(".next1");
const pre = z(".slick-prev");
const next = z(".slick-next");

slickPre.onclick = () => {
  pre.click();
};

slickNext.onclick = () => {
  next.click();
};

// ------------ slide 2 --------------

const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const slides3 = document.querySelector(".slides3");
let slickPrev2, slickNext2;
setTimeout(() => {
  slickPrev2 = document.querySelector(".slides3 button.slick-prev");
  slickNext2 = document.querySelector(".slides3 button.slick-next");
  prev2.onclick = () => {
    slickPrev2.click();
  };
  next2.onclick = () => {
    slickNext2.click();
  };
}, 500);

$(".slides3").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
});

// ---------- chuyển qua trang detail Tour------------
const findContainer = document.querySelectorAll('.find-container')
findContainer.forEach( value => {
  value.onclick = function () {
    location.href = "http://127.0.0.1:5503/Capstone_2-C2SE.20-CJB/FrontEnd/HTML/detailTour.html"
  }
})

// --------- ẩn hiện thông báo----------
const faBell = document.querySelector('.fa-bell')
const containerNotification = document.querySelector('.container-notification')

faBell.onclick = function () {
  if (containerNotification.style.display === 'none') {
    containerNotification.style.display = 'block'
  }
  else {
    containerNotification.style.display = 'none'
  }
}

