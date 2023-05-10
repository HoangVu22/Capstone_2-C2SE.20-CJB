const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));

const requestInputs = document.querySelectorAll('.request')
const createTourButton = document.querySelector('.create-tour-submit')
console.log(login)
createTourButton.onclick = () => {
  const request = {
    name: "",
    ts_id: 1,
    description: "",
    address: "",
    from_date: "",
    to_date: "",
    price: "",
    slot: ""
  }
  requestInputs.forEach(input => {
    const { key } = input.dataset
    request[key] = input.value
  })
  fetch('http://127.0.0.1:8000/api/ts/tour/create', {
    method: 'post',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(request)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))
}

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") {
    headerForm.style.display = "block";
  } else {
    headerForm.style.display = "none";
  }
};

// --------- next- prev --------------
const postImgWrap = document.querySelector('.post-img-wrap')
const wraperPostInf = document.querySelector('.wraper-post-inf')
const controlNext = document.querySelector('.control-next button')
const controlPrev = document.querySelector('.control-prev')

controlNext.onclick = function () {
  postImgWrap.style.display = 'none'
  wraperPostInf.style.display = 'block'
}

controlPrev.onclick = function () {
  postImgWrap.style.display = 'block'
  wraperPostInf.style.display = 'none'
}




// ---------------- schedual------------

const postSchedualAdd = document.querySelector(".post-schedual-add");
const postSchedualInput = document.querySelector(".post-schedual-input");
let postControl = document.querySelectorAll(".post-control i");

let id;
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
  </div>`
  }
];

postSchedualAdd.onclick = () => {
  id++;
  array.push({
    id, value: `<div class="post-item">
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
    </div>`
  });
  postSchedualInput.innerHTML = array.map((val) => val.value);
  postControl = document.querySelectorAll(".post-control i");
  console.log(postControl);
  postControl.forEach((element) => {
    element.onclick = (e) => {
      console.log(e.target.dataset.remove);
      const re = e.target.dataset.remove;

      postSchedualInput.innerHTML = array.map((val) => {
        if (val.id !== Number(re)) {
          console.log(val.value);
          return val.value;
        } else return "";
        });
      };
    });
};


const z = document.querySelector.bind(document);
const logout = z('.form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://localhost:3000/home.html';
}
