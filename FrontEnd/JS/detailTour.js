const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));
const dataTSTour = window.localStorage.getItem("dataTSTour");
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
    window.location.href = 'http://localhost:3000/login-register.html';
}
// ---------------------------------------

const apiPersonTourDetail = "http://127.0.0.1:8000/api/personal/tour/show/";
var htmlPersonTour = z('.detail-tour-convenience');
console.log(htmlPersonTour);

function RenderTourDetail(obj) {
    const htmls = `
    <ul class="list-conveniences" style="flex: 5">
                <div class="conveniences">
                    <li>
                        <i class="fa-regular fa-clock"></i>
                        <span><b>Thời Gian : </b>4 ngày 3 đêm</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-money-bill"></i>
                        <span><b>Giá tiền : </b>4.000.000 VNĐ</span>
                    </li>
                </div>
                <div class="conveniences">
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <span><b>Nơi khởi hành : </b>${obj[0].from_where}</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-person"></i>
                        <span><b>Số chỗ còn lại : </b>10 thành viên</span>
                    </li>
                </div>
            </ul>
            <div style="flex: 1; position: relative;">
                <button style="position: absolute; right: 0; font-size: 16px; top: 50%; transform: translateY(-50%); padding: 14px 20px; border-radius: 20px; border: none; background-color: #03a9f4; color: #fff; cursor: pointer;">THANH TOÁN</button>
            </div>
  `;
//   console.log(htmls);
    return htmlPersonTour.innerHTML = htmls;
}

console.log(JSON.parse(window.localStorage.getItem("detail-tour")));

fetch("http://127.0.0.1:8000/api/personal/tour/show/" + JSON.parse(window.localStorage.getItem("detail-tour")) )
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
