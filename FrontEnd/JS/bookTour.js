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
  const z = document.querySelector.bind(document);

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
  
  const logout = z('.form-logout');
  logout.onclick = () => {
    alert('Bạn chắc chắn muốn thoát ?')
    window.localStorage.clear();
    window.location.reload(true);
    window.location.href = 'http://127.0.0.1:5500/CAPSTONE2/FrontEnd/HTML/home.html';
  }
  
  
    const names = z('.header-name1');
    const avatarUser = document.getElementById("avatar_user");
    if (login.msg === "Đăng nhập thành công") {
        names.innerText = login.user_info.name;
        avatarUser.src = login.user_info.user_profile[0].avatar;
    } else {
        names.innerText = login.user_info.name;
        avatarUser.src = login.user_info.user_profile[0].avatar;
    }
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
  
  const prev2 = document.querySelector(".prev2");
  const next2 = document.querySelector(".next2");
  const slides3 = document.querySelector(".slides3");
  let slickPrev2, slickNext2;
  setTimeout(() => {
    slickPrev2 = document.querySelector(".slides3 button.slick-prev");
    slickNext2 = document.querySelector(".slides3 button.slick-next");
    prev2.onclick = () => {
      slickPrev2.click();
    };
    next2.onclick = () => {
      slickNext2.click();
    };
  }, 500);
  
  $(".slides3").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
  });
  
//   // ---------- chuyển qua trang detail Tour------------
  const findContainer = document.querySelectorAll('.find-container')
  findContainer.forEach(value => {
    value.onclick = function () {
      location.href = "http://127.0.0.1:5503/Capstone_2-C2SE.20-CJB/FrontEnd/HTML/detailTour.html"
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
        console.log(tours);
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
                  <p><b>Nơi khởi hành: </b>${tour.address}</p>
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