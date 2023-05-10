// // ----- my trip----------
new Swiper(".blog-slider", {
  effect: "fade",
});
//   // ---------------------------

const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));


if (login) {
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
const z = document.querySelector.bind(document);
const logout = z('.form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://localhost:3000/home.html';
}


const names = z('.header-name1');
const avatarUser = document.getElementById("avatar_user");
console.log(names);
if (login.msg === "Đăng nhập thành công") {
console.log(login);
names.innerText = login.user_info.name;
avatarUser.src = login.user_info.user_profile[0].avatar;
}
// } else {
//   names.innerText = login.user_info.name;
//   avatarUser.src = login.user_info.user_profile[0].avatar;
// }
//   // ---------------------------------------

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

//   // ------------ slide 1 --------------

// $(".slides2").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   speed: 800,
// });

const y = document.querySelector.bind(document);

var slickPre = document.getElementsByClassName("fa-chevron-left");
var slickNext = document.getElementsByClassName("fa-chevron-right");
var findSlickPrev = document.getElementsByClassName(".prev1");
var findSlickNext = document.getElementsByClassName(".next1");
var pre = document.getElementsByClassName("slick-prev");
var next = document.getElementsByClassName("slick-next");

console.log(pre);
console.log(next);

slickPre[0].onclick = () => {
  pre[0].click();
};

slickNext[0].onclick = () => {
  next[0].click();
};

//   // ------------ slide 2 --------------


//   // ---------- chuyển qua trang detail Tour------------
const findContainer = document.querySelectorAll('.find-container')
findContainer.forEach(value => {
  value.onclick = function () {
    location.href = "http://localhost:3000/detailTour.html"
  }
})

//   // --------- ẩn hiện thông báo----------
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



const ss = document.querySelector.bind(document);
var sliderFind = ss(".book-places");
const api = "http://127.0.0.1:8000/api/ts/tour";


let htmls = "";
function getTours(api) {
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const tours = data;
      console.log(htmls);
      htmls = tours.map((tour) => {
        console.log(Date(`${tour.to_date}`));
        return `
          <div class="find-container">
          <div class="find-container-top">
              <img src="../IMAGES/slides/slide-0.png" alt="">
          </div>
          <div class="find-container-bottom">
              <h4 class="find-bottom-name">${tour.name}</h4>
              <div class="find-bottom-address">
                  <div class="find-bottom-icon">
                      <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <p class="text-places"><b>Nơi khởi hành: </b>${tour.address}</p>
              </div>
              <div class="find-bottom-money">
                  <h2>${tour.price}đ</h2>
                  
              </div>
              <div class="find-bottom-time">
                  <div class="item">
                      <div id="day">05</div>
                      ngày
                  </div>
                  <div class="item">
                      <div id="hour">12</div>
                      giờ
                  </div>
                  <div class="item">
                      <div id="minute">30</div>
                      phút
                  </div>
                  <div class="item">
                      <div id="seconds">12</div>
                      giây
                  </div>
              </div>
              <div class="find-bottom-seats">
                  <p><b>Số chỗ còn: </b>5</p>
              </div>
          </div>
      </div>
        `;
      }); sliderFind.innerHTML = htmls.join("");
      if (sliderFind.innerHTML) {
        $(".slides2").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 800,
        });
        slickPre.onclick = () => {
          pre.click();
        };

        slickNext.onclick = () => {
          next.click();
        };
      }
    })
}

getTours(api);


// -------------------------- slide3 người dùng tạo tour (render and slides) ----------------------------------------------

const slickPrev = document.querySelectorAll(".fa-chevron-left");
const slickNextt = document.querySelectorAll(".fa-chevron-right");
const findSlickPrevv = document.getElementsByClassName("find-slick-left");
const findSlickNextt = document.getElementsByClassName("find-slick-right");

console.log(slickPre);
console.log(slickNext);
console.log(findSlickPrev);
console.log(findSlickNext);

const pre1 = document.getElementsByClassName("slick-prev");
const next1 = document.getElementsByClassName("slick-next");
var renderListTourUser = document.getElementsByClassName("popular-slides");
let htmlss = "";
function getTourUser() {
  const apiTourUser = "http://127.0.0.1:8000/api/personal/tour";
  fetch(apiTourUser)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const PStours = data.data;
      console.log(PStours);
      htmlss = PStours.map((tour) => {
        return `          
        <div>
        <div class="popular-container">
            <div class="popular-container-left">
                <img src="../IMAGES/slides/slide-0.png" alt="">
                <div class="popular-container-host">
                    <p><b>Host:</b> ${tour.host}</p>
                </div>
            </div>
            <div class="popular-container-center">
                <h1>${tour.name}</h1>
                <p><b>Thành viên:</b> ${tour.room.member}</p>
                <p><b>Từ:</b> ${tour.from_where} - <b>Đến:</b> ${tour.to_where}</p>
                <p><b>Ngày xuất phát:</b> ${tour.from_date}</p>
            </div>
            <div class="popular-container-right">
                <button class="btn" id="btn1">JOIN</button>
            </div>
        </div>
    </div>      
        `;
      });
      renderListTourUser[0].innerHTML = htmlss.join("");
      $(".popular-slides").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      });
      slickPrev[1].onclick = () => {
        pre1[1].click();
      };
      slickNext[1].onclick = () => {
        next1[1].click();
      }
    })
}


getTourUser();

// $(".slides3").slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   speed: 1000,
//   autoplay: true,
// });
// prev2.onclick = () => {
//   console.log(1);
//   slickPrev2.click();
// };
// next2.onclick = () => {
//   slickNext2.click();
//   console.log(1);
// };