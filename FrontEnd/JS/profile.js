
const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const userName = $$('.user_name');
const userPhone = $('.user_phone');
const userEmail = $('.user_email');
const userGender = $('.user_gender');
const userAvatar = $('.user_avatar');
const userAbout = $('.user_about');

const profileGenaral = document.querySelector(".profile-genaral");
const profileTitleBtn = document.querySelector(".profile-title button");
const profileGenaralEdit = document.querySelector(".profile-genaral-edit");
const profileSaveBtn = document.querySelector(".profile-save button");
const profileSaveP = document.querySelector(".profile-save p");

const btnUpdate = $('.profile_update');
const btnProfileCancel = $('.profile_cancel');
const inputUserName = $('.input-username');
const inputPhoneNumber = $('.input-phonenumber');
const inputEmail = $('.input-email');
const inputAbout = $('.form-bio');
const inputHobbies = $('.input-hobbies');
const inputGender = $('#input-gender');
const login = JSON.parse(window.localStorage.getItem("login"));


// ----- my trip----------
new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

// -----------------

if (!login) {
  headerFormLogin.style.display = "block";
  headerFormLogout.style.display = "none";
} else {
  headerFormLogout.style.display = "block";
  headerFormLogin.style.display = "none";
}
const names = $('#header-name1');
const avatarUser = $('#avatar_user');
const avatarUser1 = $('.avatar_user_header');

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") {
    headerForm.style.display = "block";
  } else {
    headerForm.style.display = "none";
  }
};
if(login.msg === "Đăng nhập thành công"){
  names.innerText = login.user_info.name;
  avatarUser.src = login.user_info.user_profile[0].avatar;
  avatarUser1.src = login.user_info.user_profile[0].avatar;
} else {
  
}
if(login.msg === "Đăng nhập thành công"){
  names.innerText = login.user_info.name;
  avatarUser.src = login.user_info.user_profile[0].avatar;
  avatarUser1.src = login.user_info.user_profile[0].avatar;
} else {
  names.innerText = login.user.name;
  avatarUser.src = "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4";
  avatarUser1.src = "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4";
}

// ---------------------------------------


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

function edit() {
  profileGenaralEdit.style.display = "none";
  profileGenaral.style.display = "block";
}

btnProfileCancel.onclick = () => {
  if (profileGenaralEdit.style.display === "block") {
    profileGenaralEdit.style.display = "none";
    profileGenaral.style.display = "block";
  }
}

console.log(login);

if (login.msg === 'Đăng nhập thành công') {
  userName[0].innerText = login.user_info.name;
  userName[1].innerText = login.user_info.name;
  userPhone.innerText = login.user_info.phone_number;
  userEmail.innerText = login.user_info.email;
  userGender.innerText = login.user_info.user_profile[0].gender;
  // userAbout.innerText = login.about;  
} else {
  userName[0].innerText = login.user.name;
  userName[1].innerText = login.user.name;
  userPhone.innerText = login.user.phone_number;
  userEmail.innerText = login.user.email;
  userGender.innerText = "male";//login.profile[0].gender;
  // userAbout.innerText = login.user.about;
}

// ------------------- logout -----------------------------
const logout = $('.form-logout');
logout.onclick = () => {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://127.0.0.1:5500/FrontEnd/HTML/login-register.html';
}

// -----------------------------------------------------------

console.log(login);
// console.log(login.user_info.user_profile[0].id);

const apiTSProfile = "http://127.0.0.1:8000/api/ts/profile/update";
const apiUserProfile = "http://127.0.0.1:8000/api/user/profile/update";

function getInfoUser() {
  if(login.user_info)
  {
    if (login.user_info.user_roles === 'user') {
      fetch(apiTSProfile, { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: login.user_info.user_profile[0].id,
          name: inputUserName.value,
          phone_number: inputPhoneNumber.value,
          avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4",
          gender: inputGender.value,
          about: inputAbout.value,
        }),
        data: ({
          id: login.user_info.user_profile[0].id,
          name: inputUserName.value,
          phone_number: inputPhoneNumber.value,
          avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4",
          gender: inputGender.value,
          about: inputAbout.value,
        }),
      })
        .then(response => { return response.json() })
        .then(data => {
          console.log('29387');
          if (data.status === 200 || data.msg === "Update thành công") {
            window.localStorage.setItem("login", JSON.stringify(data));
            const profile = JSON.parse(window.localStorage.getItem("login"));
            console.log(login);
            renderUserInfo(profile)
            alert("1");
          }else {
            console.log("Fail !!!!!!!!!");
        }
        })
    }
    window.location.reload();
  } else if (login.user){
    if (login.user.user_roles === 'user') {
      fetch(apiTSProfile, { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: login.user.id,
          name: inputUserName.value,
          phone_number: inputPhoneNumber.value,
          avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4",
          gender: inputGender.value,
          about: inputAbout.value,
        }),
        data: ({
          id: login.user.id,
          name: inputUserName.value,
          phone_number: inputPhoneNumber.value,
          avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4",
          gender: inputGender.value,
          about: inputAbout.value,
        }),
      })
        .then(response => { return response.json() })
        .then(data => {
          console.log('29387');
          if (data.status === 200 || data.msg === "Update thành công") {
            window.localStorage.setItem("login", JSON.stringify(data));
            const profile = JSON.parse(window.localStorage.getItem("login"));
            console.log(login);
            renderUserInfo(profile)
            alert("1");
          }else {
            console.log("Fail !!!!!!!!!");
        }
        })
    
  }
  // } else {
  //   fetch(apiTSProfile, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: login.user.id,
  //       name: inputUserName.value,
  //       phone_number: inputPhoneNumber.value,
  //       avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4",
  //     }),
  //     data: ({
  //       id: login.user.id,
  //       name: inputUserName.value,
  //       phone_number: inputPhoneNumber.value,
  //       avatar: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4",
  //     }),
  //   })
  //     .then(response => { return response.json() })
  //     .then(data => {
  //       if (data.status === 200 || data.msg === "Update thành công") {
  //         window.localStorage.setItem("login", JSON.stringify(data))
  //         const profile = JSON.parse(window.localStorage.getItem("login", JSON.stringify(data)));
  //         renderUserInfo(profile);
  //       } else {
  //         console.log("Fail !!!!!!!!!");
  //       }
  //     }
  //     )
  // }
  window.location.reload();
}
}
var html_UserInfo = $('.profile-genaral');


function renderUserInfo(obj) {
  console.log(html_UserInfo);
  const html = `
  <div class="profile-title">
  <h2>Hồ sơ của tôi</h2>
  <div class="profile-save">
      <button class="profile_update">Lưu</button>
      <p class="profile_cancel">Hủy</p>
  </div>
</div>
    <div class="form-profile-wraper">
    <form class="form-profile">
      <div class="form-profile-info">
          <label for="">Họ và tên</label>
          <div class="form-profile-content user_name">${obj.user.name}</div>
      </div>
      <div class="form-profile-info">
          <label for="">Số điện thoại</label>
          <div class="form-profile-conten user_phone">${obj.user.phone_number}</div>
      </div>
      <div class="form-profile-info">
          <label for="">Email</label>
          <div class="form-profile-content user_email">${obj.user.email}</div>
      </div>
      <div class="form-profile-info">
          <label for="">Giới tính/ Tuổi</label>
          <div class="form-profile-content user_gender">${obj.profile[0].gender}</div>
      </div>
      <div class="form-line"></div>
      <div class="form-profile-bio">
          <h2>About:</h2>
          <p class="user_about">Write your bio...</p>
      </div>
      <div class="form-line"></div>

      <div class="form-profile-hobbies form-profile-bio">
          <h2>Sở thích:</h2>
          <div class="profile-hobbies-list">
              <div class="tag hobbies-1">Cắm trại</div>
              <div class="tag hobbies-2">Cắm trại</div>
              <div class="tag hobbies-3">Cắm trại</div>
              <div class="tag hobbies-4">Cắm trại</div>
              <div class="tag hobbies-5">Cắm trại</div>
              <div class="tag hobbies-6">Cắm trại</div>
              <div class="tag hobbies-7">Cắm trại</div>
              <div class="tag hobbies-8">Cắm trại</div>
              <div class="tag hobbies-9">Cắm trại</div>
              <div class="tag hobbies-10">Cắm trại</div>
          </div>
      </div>
  </form>
</div> `
  return html_UserInfo.innerHTML = html;
}

btnUpdate.onclick = () => {
  getInfoUser();
}

inputUserName.onchange = (e) => {
  console.log(e.target.value);
}
inputPhoneNumber.onchange = (e) => {
  console.log(e.target.value);
}
inputEmail.disabled = true;

if(login.msg === "Update thành công" || login.status === 200)
{
  inputEmail.value = login.user.email;
} else {
  inputEmail.value = login.email;
}

inputGender.onchange  = (e) => {
  console.log(e.target.value);  
}
