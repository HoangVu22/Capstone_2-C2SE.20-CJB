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

// ---------------create trip --------------------
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tab = $(".createTrip-wraper");
// const tab1 = $(".createTrip-wraper1");
// const btn = $(".button1-btn");
// const btn1 = $(".button2-btn");
// const goBack = $(".goBack");
// const startCreateTrip = $(".startCreateTrip");
// btn.style.backgroundColor = "rgba(2, 127, 255, 1)";

// btn.onclick = () => {
//   tab.style.display = "block";
//   tab1.style.display = "none";
//   btn.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   btn1.style.backgroundColor = "white";
// };

// const formNextBtn = $(".form-next button");
// formNextBtn.onclick = () => {
//   tab.style.display = "none";
//   tab1.style.display = "block";
//   btn.style.backgroundColor = "white";
//   btn1.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   tab1.style.transition = "all 0.9 ease";
//   tab1.style.marginTop = "90px";
// };

// goBack.onclick = () => {
//   tab.style.display = "block";
//   tab1.style.display = "none";
//   btn.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   btn1.style.backgroundColor = "white";
// };

// btn1.onclick = () => {
//   tab.style.display = "none";
//   tab1.style.display = "block";
//   btn.style.backgroundColor = "white";
//   btn1.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   tab1.style.transition = "all 0.9 ease";
//   tab1.style.marginTop = "102px";
// };

const button1 = document.querySelector('.button1 button')
const button2 = document.querySelector('.button2 button')
const formTrip1 = document.querySelector('.form-trip-1')
const formTrip2 = document.querySelector('.form-trip-2')
const formNext = document.querySelector('.form-next button')
const goBack = document.querySelector('.goBack')
const startCreateTrip = document.querySelector('.startCreateTrip')

button1.onclick = function () {
  formTrip1.style.display = 'block'
  formTrip2.style.display = 'none'
  button1.style.backgroundColor = 'rgba(2, 127, 255, 1)'
  button1.style.color = '#fff'
  button1.style.border = 'none'
  button2.style.border = '1px solid #333'
  button2.style.color = '#333'
  button2.style.backgroundColor = '#fff'
}

button2.onclick = function () {
  formTrip2.style.display = 'block'
  formTrip1.style.display = 'none'
  button2.style.backgroundColor = 'rgba(2, 127, 255, 1)'
  button2.style.color = '#fff'
  button2.style.border = 'none'
  button1.style.border = '1px solid #333'
  button1.style.color = '#333'
  button1.style.backgroundColor = '#fff'
}

formNext.onclick = function () {
  formTrip2.style.display = 'block'
  formTrip1.style.display = 'none'
}

goBack.onclick = function () {
  formTrip1.style.display = 'block'
  formTrip2.style.display = 'none'
}
