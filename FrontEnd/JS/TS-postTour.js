const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") {
    headerForm.style.display = "block";
  } else {
    headerForm.style.display = "none";
  }
};

// ---------------- schedual------------

const postSchedualAdd = document.querySelector(".post-schedual-add");
const postSchedualInput = document.querySelector(".post-schedual-input");
let postControl = document.querySelectorAll(".post-control i");

let id = 0;
const array = [
  {
    id: 0,
    value: `<div class="post-item">
  <div class="post-control">
  <p>Lịch trình</p>
  </div>
  <div class="post-control-input">
                                <input type="text" placeholder="Nhập tên chuyến đi ( Ví dụ: Ngày 1: Đà Nẵng - Hà Nội )">
                            </div>
  </div>
  <div class="post-item">
  <div class="post-control">
      <i class="fa-solid fa-trash"></i>
  </div>
  <div class="post-control-input">
                                <textarea cols="30" rows="10" placeholder="Mô tả nội dung chuyến đi..."></textarea>
                            </div>
  </div>`,
  },
];
postSchedualAdd.onclick = () => {
  ++id;
  array.push({
    id,
    value: `<div class="post-item">
    <div class="post-control">
    </div>
    <div class="post-control-input">
                                <input type="text" placeholder="Nhập tên chuyến đi ( Ví dụ: Ngày 1: Đà Nẵng - Hà Nội )">
                            </div>
  </div>
  <div class="post-item">
    <div class="post-control">
        <i class="fa-solid fa-trash" data-remove=${id}></i>
    </div>
    <div class="post-control-input">
                                <textarea cols="30" rows="10" placeholder="Mô tả nội dung chuyến đi..."></textarea>
                            </div>
  </div>`,
  });
  postSchedualInput.innerHTML = array.map((val) => val.value);
  postControl = document.querySelectorAll(".post-control i");
  postControl.forEach((element) => {
    element.onclick = (e) => {
      const re = e.target.dataset.remove;

      postSchedualInput.innerHTML = array.map((val) => {
        if (val.id !== Number(re)) {
          return val.value;
        } else return "";
      });
    };
  });
};
