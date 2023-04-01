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


$('.slides2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800
});

const z = document.querySelector.bind(document)
const pre = z('.slick-prev');
const next = z('.slick-next');
const slickPre = z('.fa-chevron-left');
const slickNext = z('.fa-chevron-right');

console.log(pre +' ' +next +' '+slickPre + ' '+slickNext);

slickPre.onclick = () => {
    pre.click();
    
}
slickNext.onclick = () => {
    next.click();
}