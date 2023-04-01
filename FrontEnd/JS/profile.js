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


const profileGenaral = document.querySelector('.profile-genaral')
const profileTitleBtn = document.querySelector('.profile-title button')
const profileGenaralEdit = document.querySelector('.profile-genaral-edit')
const profileSaveBtn = document.querySelector(".profile-save button");
const profileSaveP = document.querySelector(".profile-save p");

profileTitleBtn.onclick = function () {
    if (profileGenaralEdit) {
        if (profileGenaralEdit.style.display === "block") {
            profileGenaralEdit.style.display = "none";
            profileGenaral.style.display = "block";
        } else {
            profileGenaralEdit.style.display = "block";
            profileGenaral.style.display = "none";
        }
    }
};

function edit () {
    profileGenaralEdit.style.display = "none";
    profileGenaral.style.display = "block";
}

// profileSaveBtn.onclick = edit;
profileSaveP.onclick = edit;