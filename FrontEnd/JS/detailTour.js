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

$(".open").click(function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");

  answer.slideToggle(200);

  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  } else {
    trigger.addClass("faq-o");
  }

  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  } else {
    container.addClass("expanded");
  }
});
