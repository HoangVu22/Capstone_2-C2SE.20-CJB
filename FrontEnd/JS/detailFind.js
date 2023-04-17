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
// if(login.msg === "Đăng nhập thành công"){
//   names[0].innerText = login.user_info.name;
//   avatarUser.src = login.user_info.user_profile[0].avatar;
// } else {
//   names[0].innerText = login.user_info.name;
//   avatarUser.src = login.user_info.user_profile[0].avatar;
// }

// ---------------------------------------


// $('.slides2').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 800
// });

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

const apiPersonTourDetail = "http://127.0.0.1:8000/api/personal/tour/show/1";
var htmlPersonTour = z('.detail-container');

function RenderTourDetail (obj) {
  const htmls =  `
  <div class="detail-inf-tour">
                <div class="detail-inf-wraper">
                    <div class="detail-inf">
                        <h1>${obj.name}</h1>
                        <div class="detail-inf-all detail-inf-address">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Đà Nẵng, Việt Nam</p>
                        </div>
                        <div class="detail-inf-all detail-inf-time">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>${obj.from_date} - ${obj.to_date}</p>
                        </div>
                        <div class="detail-inf-all detail-inf-cost">
                            <i class="fa-solid fa-comments-dollar"></i>
                            <p>100.000 VNĐ</p>
                        </div>
                    </div>
                    <div class="detail-trip">
                        <h4>Chi tiết chuyến đi</h4>
                        <p>${obj.description}</p>
                    </div>
                    <div class="detail-location">
                        <h4>Điểm gặp gỡ</h4>
                        <input type="password" placeholder="">
                        <p>(Kết nối với M để xem cái này)</p>
                    </div>

                    <div class="detail-host">
                        <h4>Chuyến đi được tạo bởi</h4>
                        <div class="detail-inf-all detail-inf-address">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Cần Thơ, Việt Nam</p>
                        </div>
                        <div class="detail-host-inf">
                            <div class="detail-host-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-confirm">
                                <div class="detail-confirm-icon detail-confirm-email">
                                    <i class="fa-solid fa-fingerprint"></i>
                                    <p>Xác minh qua email</p>
                                </div>
                                <div class="detail-confirm-icon detail-confirm-facebook">
                                    <i class="fa-solid fa-fingerprint"></i>
                                    <p>Xác minh qua facebook</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="detail-map">
                    <div id="map"></div>
                    <div class="detail-inf-action">
                        <div class="detail-action detail-book">
                            <button>JOIN</button>
                        </div>
                        <div class="detail-action detail-schedule">
                            <button>SCHEDUAL</button>
                        </div>
                    </div>

                    <div><h4>Thành viên đã tham gia</h4></div>
                    <div class="detail-member">
                        <div class="detail-member-wraper">
                            <div class="detail-member-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-member-name">
                                <p>Nguyễn Hoàng Vũ</p>
                            </div>
                        </div>
                        <div class="detail-member-wraper">
                            <div class="detail-member-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-member-name">
                                <p>Lê Đình Trường</p>
                            </div>
                        </div>
                        <div class="detail-member-wraper">
                            <div class="detail-member-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-member-name">
                                <p>Nguyễn Thúy Hằng</p>
                            </div>
                        </div>
                        <div class="detail-member-wraper">
                            <div class="detail-member-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-member-name">
                                <p>Võ Tiến Dũng</p>
                            </div>
                        </div>
                        <div class="detail-member-wraper">
                            <div class="detail-member-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-member-name">
                                <p>Nguyễn Văn Tân</p>
                            </div>
                        </div>
                        <div class="detail-member-wraper">
                            <div class="detail-member-img">
                                <img src="../IMAGES/slides/slide-0.png" alt="">
                            </div>
                            <div class="detail-member-name">
                                <p>Nguyễn Văn Tùng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `;
  return htmlPersonTour.innerHTML = htmls; 
}

const render = z('.abc');

function start(){
  render.onclick = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/personal/tour/show/1")
    .then(res => res.json())
    .then(
      data => {
        window.localStorage.setItem("dataPersonTour", JSON.stringify(data));
        const profile = JSON.parse(window.localStorage.getItem("dataPersonTour"));
        RenderTourDetail(profile);
        // window.location.reload(true)
        alert(1)
      }
    )
  }
}

start();
