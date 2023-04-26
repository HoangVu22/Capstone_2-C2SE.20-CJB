const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));
const pageDetail = window.localStorage.getItem("page-detail");
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
  console.log(avatarUser);
  if (login) {
    names.innerText = login.user_info.name;
    avatarUser.src = login.user_info.user_profile[0].avatar;
  }

//   ----------------------------------------------------------------------
const logout = document.getElementsByClassName('form-logout');
logout.onclick = () => {
    alert('Bạn chắc chắn muốn thoát ?')
    window.localStorage.clear();
    window.location.reload(true);
    window.location.href = 'http://127.0.0.1:5503/Capstone_2-C2SE.20-CJB/FrontEnd/HTML/login-register.html';
}
// ---------------------------------------

const apiPersonTourDetail = "http://127.0.0.1:8000/api/personal/tour/show/";
var htmlPersonTour = z('.detail-container');

function RenderTourDetail(obj) {
    const htmls = `
    <div class="detail-inf-tour">
    <div class="detail-inf-wraper">
        <div class="detail-inf">
            <h1>${obj.to_where}</h1>
            <div class="detail-inf-all detail-inf-time">
                <i class="fa-solid fa-location-dot"></i>
                <p><b>Điểm xuất phát: </b>${obj.from_where}</p>
            </div>
            <div class="detail-inf-all detail-inf-time">
                <i class="fa-solid fa-location-dot"></i>
                <p><b>Điểm đến: </b>${obj.to_where}</p>
            </div>
            <div class="detail-inf-all detail-inf-time">
                <i class="fa-solid fa-person"></i>
                <p><b>Số thành viên: </b>5</p>
            </div>
            <div class="detail-inf-all detail-inf-time">
                <i class="fa-solid fa-calendar-days"></i>
                <p>${obj.from_date} - ${obj.to_date}</p>
            </div>
        </div>
        <div class="detail-trip">
            <h4>Mô tả chuyến đi</h4>
            <p>${obj.description}</p>
        </div>
        <!-- <div class="detail-location">
            <h4>Điểm xuất phát</h4>
            <p>Thành phố Đà Nẵng</p>
        </div> -->

        <div class="detail-host">
            <h4 style="font-size: 22px; display: flex; align-items: center;">Chuyến đi được tạo bởi: <span style="color: #000; margin-left: 10px;">${obj.name}</span></h4>
            <div class="detail-host-inf">
                <div class="detail-host-img">
                    <img src="../IMAGES/default/avatar.jpg" alt="avatar" style="border-radius: 50%;">
                </div>
                <div class="detail-confirm" style="position: relative">
                    <div class="detail-confirm-icon detail-confirm-email">
                        <i class="fa-solid fa-fingerprint"></i>
                        <p>Xác minh qua email</p>
                    </div>
                    <div class="detail-confirm-icon detail-confirm-facebook">
                        <i class="fa-solid fa-fingerprint"></i>
                        <p>Xác minh qua facebook</p>
                    </div>
                    <div class="add-friend">
                        <button>
                            <i class="fa-solid fa-user-plus" style="color: #ffffff;"></i>
                            Add friend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="detail-map">
        <div id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245427.202253111!2d108.07605262450348!3d16.02392166225702!2m3!1f0!2f0!3f0!3m2!
            1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1679646974460!5m2!1svi!2s"
                width="600" height="320" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="detail-inf-action" style="padding-bottom: 25px">
            <div class="detail-action detail-book">
                <button style="font-size: 18px;">Tham gia</button>
            </div>
        </div>

        <div style="padding: 20px;"><h4>Thành viên đã tham gia</h4></div>
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
//   console.log(htmls);
    return htmlPersonTour.innerHTML = htmls;
}

fetch("http://127.0.0.1:8000/api/personal/tour/show/" + pageDetail)
    .then(res => res.json())
    .then(
        data => {
            console.log(data);
            window.localStorage.setItem("data",JSON.stringify(data));
            const dataa = window.localStorage.getItem("data");
            RenderTourDetail(data);
        })
        const dataa = window.localStorage.getItem("data");
        console.log(dataa);
