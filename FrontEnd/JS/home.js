const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));
const z = document.querySelector.bind(document);
const zz = document.querySelectorAll.bind(document);

if (login) {
  headerNavForm.onclick = function () {
    if (headerForm.style.display === "none") {
      headerForm.style.display = "block";
      headerFormLogout.style.display = "block";
      headerFormLogin.style.display = "none";
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
      headerFormLogout.style.display = "none";
    } else {
      headerForm.style.display = "none";
      headerFormLogin.style.display = "none";
    }
  };
}
const names = z('.header-name1');
const avatarUser = z(".header-form-avatar #avatar_user");
if (login) {
  names.innerText = login.user_info.name;
  avatarUser.src = login.user_info.user_profile[0].avatar;
}

const logout = z('.form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://localhost:3000/FrontEnd/HTML/home.html';
}


// ---------------------------------------


const slickPre = z(".fa-chevron-left");
const slickNext = z(".fa-chevron-right");
const findSlickPrev = z(".find-slick-left");
const findSlickNext = z(".find-slick-right");
const pre = z(".slick-prev");
const next = z(".slick-next");

const pre1 = document.getElementsByClassName("slick-prev");
const next1 = document.getElementsByClassName("slick-next");

console.log(login);

// const becomeSupplier = document.getElementsByClassName("become-supplier");
// console.log(becomeSupplier);
// const apiTSProfile = "http://127.0.0.1:8000/api/user/profile/update";
// becomeSupplier  .onclick  = (e) => {
//   fetch(apiTSProfile,{
//     method: 'PUT',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id: login.user_info.user_profile[0].id,
//         name: login.user_info.name,
//         phone_number: login.user_info.phone_number,
//         avatar: login.user_info.user_profile[0].avatar,
//         gender: login.user_info.user_profile[0].gender,
//         about: login.user_info,
//       }),
//       data: ({
//         id: login.user_info.user_profile[0].id,
//         name: login.user_info.name,
//         phone_number: login.user_info.phone_number,
//         avatar: login.user_info.user_profile[0].avatar,
//         gender: login.user_info.user_profile[0].gender,
//         about: login.user_info,
//       }),
//   })
//   .then(res => res.json())
//   .then((data)=>{
//     data.user_info.user_roles = "ts";
//     window.localStorage.setItem("login",JSON.stringify(data));
//     console.log(data);
//     alert(1)
//   })
// }

// const names = $('.header-name1');
// const avatarUser = document.getElementsByClassName("avatar_user");
// if(login.msg === "Đăng nhập thành công"){
//   names[0].innerText = login.user_info.name;
//   avatarUser[0].src = login.user_info.user_profile[0].avatar;
// } else {
//   names[0].innerText = login.user.name;
//   avatarUser[0].src = "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PdWsTXpElkEAX9IVL9U&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBGaaF1sKuii3DajDaAxGsPyrPBf8lHeo2HgE45lER7hA&oe=643E53C4";
// }


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


// ---------------------------------------------------

const ss = document.querySelector.bind(document);
var sliderFind = ss(".slides");
const api = "http://127.0.0.1:8000/api/homepage/tour";

let htmls = "";
function getTours(api) {
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const tours = data.data;
      htmls = tours.map((tour) => {
        return `
          <div class="find-container">
                <div class="find-container-top">
                    <img src="../IMAGES/slides/slide-5.png" alt="">
                </div>
                <div class="find-container-bottom">
                    <h4 class="find-bottom-name">${tour.name}</h4>
                    <div class="find-bottom-address">
                        <div class="find-bottom-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <p>${tour.address}</p>
                    </div>
                    <div class="find-bottom-time">
                        <div class="find-bottom-icon">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <p>${tour.from_date} - ${tour.to_date}</p>
                    </div>
                </div>
            </div>
      `;
      }); 
      sliderFind.innerHTML = htmls.join("");
      $(".slides").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
      });
      findSlickPrev.onclick = () => {
        pre1[0].click();
      };
      findSlickNext.onclick = () => {
        next1[0].click();
      }
    })
}

getTours(api);

