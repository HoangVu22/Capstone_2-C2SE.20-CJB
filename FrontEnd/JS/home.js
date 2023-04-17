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
if(login){
  names[0].innerText = login.user_info.name;
  avatarUser.src = login.user_info.user_profile[0].avatar;
}
// ---------------------------------------

$(".popular-slides").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
});

const z = document.querySelector.bind(document);
const zz = document.querySelectorAll.bind(document);

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

console.log(login);

const becomeSupplier = document.getElementsByClassName("become-supplier");
console.log(becomeSupplier);
const apiTSProfile = "http://127.0.0.1:8000/api/ts/profile/update";
becomeSupplier[0].onclick  = (e) => {
  fetch(apiTSProfile,{
    method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: login.user_info.user_profile[0].id,
        name: login.user_info.name,
        phone_number: login.user_info.phone_number,
        avatar: login.user_info.user_profile[0].avatar,
        gender: login.user_info.user_profile[0].gender,
        about: login.user_info,
      }),
  })
  .then(res => res.json())
  .then((data)=>{
    data.user_info.user_roles = "ts";
    console.log(data);
    alert(1)
  })
}

