// ----- my trip----------
new Swiper(".blog-slider", {
  effect: "fade",
});
// ---------------------------

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
    location.href = "http://127.0.0.1:5500/FrontEnd/HTML/detailTour.html"
  }
})

