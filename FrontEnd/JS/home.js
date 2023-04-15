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

// ---------------------------------------

$(".popular-slides").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
});

const z = document.querySelector.bind(document);
const slickPre = z(".fa-chevron-left");
const slickNext = z(".fa-chevron-right");
const findSlickPrev = z(".find-slick-left");
const findSlickNext = z(".find-slick-right");
const pre = z(".slick-prev");
const next = z(".slick-next");

slickPre.onclick = () => {
  pre.click();
};
slickNext.onclick = () => {
  next.click();
};

const pre1 = document.getElementsByClassName("slick-prev");
const next1 = document.getElementsByClassName("slick-next");

$(".slides2").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  speed: 800,
});

findSlickPrev.onclick = () => {
  pre1[1].click();
};
findSlickNext.onclick = () => {
  next1[1].click();
};


const logout = z('.form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://127.0.0.1:5503/Capstone_2-C2SE.20-CJB/FrontEnd/HTML/login-register.html';
}

const names = $('.header-name1');
const avatarUser = document.getElementsByClassName("avatar_user");
if(login.msg === "Đăng nhập thành công"){
  names[0].innerText = login.user_info.name;
  avatarUser[0].src = login.user_info.user_profile[0].avatar;
} else {
  names[0].innerText = login.user.name;
  avatarUser[0].src = "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4";
}
