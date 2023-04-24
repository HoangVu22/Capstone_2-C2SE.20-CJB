const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));

const destinationInput = $(".diemden");
const destinationSuggestList = $(".destination-list");

let listPlace = [];

// const controller = new AbortController();
let aborter = null
const searching = (value) => {
  if (aborter) {
    aborter.abort()
  }
  aborter = new AbortController()
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const params = {
    limit: 5,
   // country: "vietnam",
    q: value,
    format: "json",
    //addressdetails: "addressdetails",
    addressdetails: 1,
    polygon_geojson: 0,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestOptions = {
    method: "get",
    redirect: "follow",
    signal: aborter.signal,
  };
  fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      listPlace = JSON.parse(result);
      console.log(listPlace)
      const places = listPlace.map((place) => `<li class="destination-item"><p>${place.display_name}</p></li>`).join("");
    destinationSuggestList.innerHTML = places;
    })
    .catch((error) => console.log({ error }));
};

const debounce = (func, timeout = 300) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timeout);
  };
};

destinationInput.onkeydown = (e) => {
  debounce(() => searching(e.target.value), 0)();
};

const mapDOM = $(".form-map");
const map = L.map(mapDOM).setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  const marker = L.marker([lat, lng]).addTo(map);
  marker.on("click", (e) => {
    map.removeLayer(marker);
  });
});

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

const logout = document.getElementsByClassName("form-logout");
logout.onclick = () => {
  alert("Bạn chắc chắn muốn thoát ?");
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = "http://127.0.0.1:5503/Capstone_2-C2SE.20-CJB/FrontEnd/HTML/login-register.html";
};

const names = $(".header-name1");
const avatarUser = $("#avatar_user");
if (login?.msg === "Đăng nhập thành công") {
  names.innerText = login?.user_info.name;
  avatarUser.src = login?.user_info.user_profile[0].avatar;
} else {
  names.innerText = login?.user_info.name;
  avatarUser.src = login?.user_info.user_profile[0].avatar;
}

// ---------------create trip --------------------

// const tab = $(".createTrip-wraper");
// const tab1 = $(".createTrip-wraper1");
// const btn = $(".button1-btn");
// const btn1 = $(".button2-btn");
// const goBack = $(".goBack");
// const startCreateTrip = $(".startCreateTrip");
// btn.style.backgroundColor = "rgba(2, 127, 255, 1)";

// btn.onclick = () => {
//   tab.style.display = "block";
//   tab1.style.display = "none";
//   btn.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   btn1.style.backgroundColor = "white";
// };

// const formNextBtn = $(".form-next button");
// formNextBtn.onclick = () => {
//   tab.style.display = "none";
//   tab1.style.display = "block";
//   btn.style.backgroundColor = "white";
//   btn1.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   tab1.style.transition = "all 0.9 ease";
//   tab1.style.marginTop = "90px";
// };

// goBack.onclick = () => {
//   tab.style.display = "block";
//   tab1.style.display = "none";
//   btn.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   btn1.style.backgroundColor = "white";
// };

// btn1.onclick = () => {
//   tab.style.display = "none";
//   tab1.style.display = "block";
//   btn.style.backgroundColor = "white";
//   btn1.style.backgroundColor = "rgba(2, 127, 255, 1)";
//   tab1.style.transition = "all 0.9 ease";
//   tab1.style.marginTop = "102px";
// };

const button1 = document.querySelector(".button1 button");
const button2 = document.querySelector(".button2 button");
const formTrip1 = document.querySelector(".form-trip-1");
const formTrip2 = document.querySelector(".form-trip-2");
const formNext = document.querySelector(".form-next button");
const goBack = document.querySelector(".goBack");
const startCreateTrip = document.querySelector(".startCreateTrip");

const tenchuyendi = $(".tenchuyendi");
const diemxuatphat = $(".diemxuatphat");
const diemden = $(".diemden");
const tungay = $(".tungay");
const denngay = $(".denngay");
const songuoi = $(".songuoi");
const kinhdo = $(".kinhdo");
const vido = $(".vido");
const motachuyendi = $(".motachuyendi");

const btnCreateTrip = $(".create-trip");
console.log(btnCreateTrip);
btnCreateTrip.onclick = () => {
  fetch("http://127.0.0.1:8000/api/personal/tour/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: tenchuyendi.value,
      owner_id: login.user_info.user_profile[0].user_id,
      from_date: tungay.value,
      to_date: denngay.value,
      lat: vido.value,
      lon: kinhdo.value,
      from_where: diemxuatphat.value,
      to_where: diemden.value,
      room_id: 1,
    }),
    data: {
      name: tenchuyendi.value,
      owner_id: login.user_info.user_profile[0].user_id,
      from_date: tungay.value,
      to_date: denngay.value,
      lat: vido.value,
      lon: kinhdo.value,
      from_where: diemxuatphat.value,
      to_where: diemden.value,
      room_id: 1,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
