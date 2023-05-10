
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
// new Swiper(".blog-slider", {
//     spaceBetween: 30,
//     effect: "fade",
//     loop: true,
//     mousewheel: {
//         invert: false,
//     },
//     // autoHeight: true,
//     pagination: {
//         el: ".blog-slider__pagination",
//         clickable: true,
//     },
// });

// -------------------- render list tour ------------------------


function getListTour() {
    fetch("http://127.0.0.1:8000/api/personal/tour/all/" + login.user_info.user_profile[0].user_id)
        .then(res => res.json())
        .then(
            data => {
                window.localStorage.setItem("ListTour", JSON.stringify(data.all_tour));
                return;
            }
        )
}

var sliderFind = $(".swiper-wrapper");
// console.log(api);

// const api = "http://127.0.0.1:8000/api/personal/tour/all/" + login.user_info.user_profile[0].user_id;
let htmls = "";
function renderListTour() {
    fetch("http://127.0.0.1:8000/api/personal/tour/all/" + login.user_info.user_profile[0].user_id)
        .then(response => response.json())
        .then(data => {
            const tours = data.all_tour;
            window.localStorage.setItem("dataPersonTour", JSON.stringify(data.all_tour));

            // const tourNames = document.querySelectorAll('.blog-slider__item .blog-slider__content .profile-control .blog-slider__button')
            // tourNames.forEach(tourr => {
            //     tourr.onclick = (e) => {
            //         localStorage.setItem('targetTourId', e.target.dataset.tourr)
            //         window.location.href = 'http://localhost:3000/detailFind.html'
            //     }
            // })
            htmls = tours.map((tour) => {
                return `
                <div class="blog-slider__item swiper-slide data-id='${tour.id}'">
                
                <div class="blog-slider__img">

                    <img src="https://images.unsplash.com/photo-1512633017083-67231aba710d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                        alt="">
                </div>
                <div class="blog-slider__content">
                    <div class="blog-slider__title">${tour.name}</div>
                    <div class="blog-slider__trip">
                        <p><b>Từ:</b> ${tour.from_where} - <b>Đến:</b> ${tour.to_where}</p>
                        <p class="tao-them">${tour.from_date}</p>
                    </div>
                    <div class="blog-slider__host"><b>Người tạo: </b>${login.user_info.name}</div>
                    <div class="blog-slider__text"> ${tour.description} </div>
                    <div class="profile-control">
                        <div class="">
                            <a href="./detailFind.html" class="blog-slider__button" onclick="handle_detail_page(${tour.id})" >CHI TIẾT</a>
                        </div>
                        <div class="profile-action">
                            <a href="./createTrip.html" onclick="handleUpdateTour(${tour.id})">
                                <i class="fa-solid fa-pencil"></i>
                            </a>
                            <i class="fa-solid fa-trash-can btn-delete" onclick="handle_delete(${tour.id},${tour.owner_id})"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
            });
            sliderFind.innerHTML = htmls.join("");
            if (sliderFind.innerHTML) {
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
            }
        })
    // window.location.reload(true)
}

// const handle_detail_page = $(".blog-slider__button");


function handle_delete(e, v) {
    console.log(e);
    console.log(v);
    // const listTour = JSON.parse(window.localStorage.getItem("dataPersonTour"));
    window.localStorage.setItem("page-detail", e)
    console.log(window.localStorage.getItem("page-detail"));
    fetch("http://127.0.0.1:8000/api/personal/tour/delete/" + e + "?owner_id=" + v,
        {
            method: 'DELETE',
        }
    )
        .then(res => res.json())
        .then(data => {
            createToast("success")
            setTimeout(() => {
                window.location.reload(true)
            }, 3000)
        })
        .catch(error => {
            createToast("error")
        })

}

function handle_detail_page(e) {
    const listTour = JSON.parse(window.localStorage.getItem("dataPersonTour"));
    window.localStorage.setItem("page-detail", e)
    console.log(window.localStorage.getItem("page-detail"));
    window.location.href = 'http://localhost:3000/detailFind.html';
}

// const tourNames = document.querySelectorAll('.blog-slider__item .blog-slider__content .profile-control .btn-delete')
// tourNames.forEach((tourr) => {
//     tourr.onclick = (e) => {
//         alert(e.target.dataset.tourr);
//         localStorage.setItem('targetTourId', e.target.dataset.tourr)
//         e.href = 'http://localhost:3000/detailFind.html'
//     }
// })


function start() {
    renderListTour();
}

start();

if (!login) {
    headerFormLogin.style.display = "block";
    headerFormLogout.style.display = "none";
} else {
    headerFormLogout.style.display = "block";;
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
if (login.status === 200) {
    names.innerText = login.user_info.name;
    avatarUser.src = login.user_info.user_profile[0].avatar;
    avatarUser1.src = login.user_info.user_profile[0].avatar;
}
if (login.status === 200) {
    names.innerText = login.user_info.name;
    avatarUser.src = login.user_info.user_profile[0].avatar;
    avatarUser1.src = login.user_info.user_profile[0].avatar;
} else {
    names.innerText = login.user_info.name;
    avatarUser.src = login.user_info.user_profile[0].avatar;
    avatarUser1.src = login.user_info.user_profile[0].avatar;
}

// // ---------------------------------------


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

if (login.status === 200) {
    userName[0].innerText = login.user_info.name;
    userName[1].innerText = login.user_info.name;
    userPhone.innerText = login.user_info.phone_number;
    userEmail.innerText = login.user_info.email;
    userGender.innerText = login.user_info.user_profile[0].gender;
    userAbout.innerText = login.user_info.about;
} else {
    userName[0].innerText = login.user_info.name;
    userName[1].innerText = login.user_info.name;
    userPhone.innerText = login.user_info.phone_number;
    userEmail.innerText = login.user_info.email;
    userGender.innerText = login.user_info.user_profile[0].gender;
    userAbout.innerText = login.user_info.about;
}



// // ------------------- logout -----------------------------
console.log(login);
const logout = $('.form-logout');
logout.onclick = () => {
    alert('Bạn chắc chắn muốn thoát ?')
    window.localStorage.clear();
    window.location.reload(true);
    window.location.href = 'http://localhost:3000/home.html';
}


// // -----------------------  update profile user ------------------------------------
console.log(login.user_info.user_profile[0].avatar);
function getInfoUser() {
    fetch("http://127.0.0.1:8000/api/user/profile/update", {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: login.user_info.user_profile[0].user_id,
            name: inputUserName.value,
            phone_number: inputPhoneNumber.value,
            avatar: login.user_info.user_profile[0].avatar,
            gender: inputGender.value,
            about: inputAbout.value,
        }),
        data: ({
            id: login.user_info.user_profile[0].user_id,
            name: inputUserName.value,
            phone_number: inputPhoneNumber.value,
            avatar: login.user_info.user_profile[0].avatar,
            gender: inputGender.value,
            about: inputAbout.value,
        }),
    })
        .then(response => response.json())
        .then(data => {
            window.localStorage.setItem("login", JSON.stringify(data));
            const profile = JSON.parse(window.localStorage.getItem("login"));
            createToast("success")
            window.location.reload(true);
            renderUserInfo(profile);
        })
        .catch(error => alert(error))
}

var html_UserInfo = $('.profile-genaral');

// ----------------------- render user info ------------------------------

function renderUserInfo(obj) {
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
          <div class="form-profile-content user_name">${obj.user_info.name}</div>
      </div>
      <div class="form-profile-info">
          <label for="">Số điện thoại</label>
          <div class="form-profile-conten user_phone">${obj.user_info.phone_number}</div>
      </div>
      <div class="form-profile-info">
          <label for="">Email</label>
          <div class="form-profile-content user_email">${obj.user_info.email}</div>
      </div>
      <div class="form-profile-info">
          <label for="">Giới tính/ Tuổi</label>
          <div class="form-profile-content user_gender">${'Male'}</div>
      </div>
      <div class="form-line"></div>
      <div class="form-profile-bio">
          <h2>About:</h2>
          <p class="user_about">${obj.user_info.about}</p>
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

// if (login.status === 200) {
btnUpdate.onclick = () => {
    console.log(329846234);
    fetch("http://127.0.0.1:8000/api/user/profile/update", {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: login.user_info.user_profile[0].user_id,
            name: inputUserName.value,
            phone_number: inputPhoneNumber.value,
            avatar: login.user_info.user_profile[0].avatar,
            gender: inputGender.value,
            about: inputAbout.value,
        }),
        data: ({
            id: login.user_info.user_profile[0].user_id,
            name: inputUserName.value,
            phone_number: inputPhoneNumber.value,
            avatar: login.user_info.user_profile[0].avatar,
            gender: inputGender.value,
            about: inputAbout.value,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.localStorage.setItem("login", JSON.stringify(data));
            const profile = JSON.parse(window.localStorage.getItem("login"));
            createToast("success")
            setTimeout(() => {
                window.location.reload(true);
            }, 5000);
            renderUserInfo(profile);
        })
        .catch(error => console.log(error))
}
// }

// ------------------------------------------------------------------

inputUserName.onchange = (e) => {
    console.log(e.target.value);
}
inputPhoneNumber.onchange = (e) => {
    console.log(e.target.value);
}
inputEmail.disabled = true;

if (login.msg === "Update thành công" || login.status === 200) {
    inputEmail.value = login.user_info.email;
} else {
    inputEmail.value = login.user_info.email;
}

inputGender.onchange = (e) => {
    console.log(e.target.value);
}

inputAbout.onchange = (e) => {
    console.log(e.target.value)
}



// // ------ lịch sử đặt tours------------------------------------------------

const historyTour = document.querySelector('.history-tour')
const supplierPages = document.querySelector('.supplierPages')
const profile = document.querySelector('.profileGenaral')

const newLocal = historyTour.onclick = function () {
    supplierPages.style.display = 'block';
    profile.style.display = 'none';
};


// const TourID = $('.blog-slider__button');
// console.log(TourID);
// TourID.onclick = (tours) => {
//     console.dir(this.id);
// }

// const listTours = JSON.parse(window.localStorage.getItem("ListTour"));
// console.log(listTours);




const createGroup = $(".create-group");
createGroup.onclick = () => {
    window.location.href = "http://localhost:3000/group.html";
}



// ------------------------ update PS tour ------------------------------------
function handleUpdateTour(data){
    console.log(data);
}


// ----------------------- toást message --------------------------------
const notifications = document.querySelector(".notifications"),
    buttons = document.querySelectorAll(".buttons .btn");
// Object containing details for different types of toasts
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: Delete tour success...',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: Delete tour error....',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
}
const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}
const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}