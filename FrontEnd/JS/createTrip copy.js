const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));

const destinationInput = $(".diemden");
const destinationSuggestList = $(".destination-location-suggestion");
const currentLocationInupt = $('.diemxuatphat')
const currentLocationSuggestList = $('.current-location-suggestion')


const createTourState = {
  name: "",
  owner_id: "",
  description: "",
  from_date: "",
  to_date: "",
  lat: "",
  lon: "",
  from_where: "",
  to_where: "",
  room_id: ""
}

const mapDOM = $(".form-map");
const map = L.map(mapDOM).setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 10,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  const marker = L.marker([lat, lng]).addTo(map);
  marker.on("click", (e) => {
    map.removeLayer(marker);
  });
});

let listPlace = [];

const handleDestinationSuggestItemClick = (doms, parent) => {
  doms.forEach(item => {
    item.onclick = () => {
      const { lat, lon } = item.dataset
      // gán lat, lon cho biến bất kỳ để có thể ném vào trong call api create-tour, ví dụ: a = lat; b = lon
      const marker = L.marker([lat, lon], { draggable: true }).addTo(map)
      map.flyTo([lat, lon], 10)
      marker.on('dragend', (e) => {

      })
      parent.innerHTML = null
    }
  })
}

const handleCurrentLocationSuggestItemClick = (doms, parent) => {
  doms.forEach(item => {
    item.onclick = () => {
      const { lat, lon } = item.dataset
      const name = item.innerText
      console.log(name)
      // gán name của điểm xuất phát, ví dụ: a = name
      const marker = L.marker([lat, lon], { draggable: true }).addTo(map)
      map.flyTo([lat, lon], 10)
      marker.on('dragend', (e) => {

      })
      parent.innerHTML = null
    }
  })
}
let aborter = null
const searching = (value, listdom, itemclass, func) => {
  // if (aborter) {
  //   aborter.abort()
  // }
  aborter = new AbortController()
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const params = {
    q: value,
    format: "json",
    addressdetails: 1,
    polygon_geojson: 0,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestOptions = {
    method: "get",
    redirect: "follow",
  };
  fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      listPlace = JSON.parse(result);
      const places = listPlace.map((place) => `<li data-lat="${place.lat}" data-lon="${place.lon}" class="destination-item"><p>${place.display_name}</p></li>`).join("");
      listdom.innerHTML = places;
      const itemdoms = listdom.querySelectorAll(`.${itemclass}`)
      func(itemdoms, listdom)
    })
    .catch(error => console.log(error))
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
  debounce(() => searching(e.target.value, destinationSuggestList, 'destination-item', handleDestinationSuggestItemClick), 0)();
};

currentLocationInupt.onkeydown = (e) => {
  debounce(() => searching(e.target.value, currentLocationSuggestList, 'destination-item', handleCurrentLocationSuggestItemClick), 0)()
}

// ------------------------------------------------------------------------------

// if (login) {
//     headerNavForm.onclick = function () {
//         if (headerForm.style.display === "none") {
//             headerForm.style.display = "block";
//             headerFormLogout.style.display = "block";
//         } else {
//             headerForm.style.display = "none";
//             headerFormLogout.style.display = "none";
//         }
//     };
// } else {
//     headerNavForm.onclick = function () {
//         if (headerForm.style.display === "none") {
//             headerForm.style.display = "block";
//             headerFormLogin.style.display = "block";
//         } else {
//             headerForm.style.display = "none";
//             headerFormLogin.style.display = "none";
//         }
//     };
// }

const logout = $('.form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://localhost:3000/home.html';
}


const names = $(".header-name1");
const avatarUser = $("#avatar_user");
if (login?.msg === "Đăng nhập thành công") {
  names.innerText = login?.user_info.name;
  avatarUser.src = login?.user_info.user_profile[0].avatar;
} else {
  names.innerText = login?.user_info.name;
  avatarUser.src = login?.user_info.user_profile[0].avatar;
}

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



// ---------------------------- message toast -----------------------------------------
const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");
// Object containing details for different types of toasts
const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
    text: 'Success: Create Group Chat Success...',
  },
  error: {
    icon: 'fa-circle-xmark',
    text: 'Error: Create Group Chat....',
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
// // Adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    createToast(btn.id)
    console.log(btn.id);
  });
});

// ------------------------------------------------------------------------

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
const motachuyendi = $(".description");

console.log(login);

const btnCreateTrip = $(".create-trip");
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
      lat: 6.213213, //vido.value,
      lon: 1.2173812,//kinhdo.value,
      from_where: diemxuatphat.value,
      to_where: diemden.value,
      room_id: login.user_info.user_profile[0].user_id,
      description: motachuyendi.value,
    }),
    data: {
      name: tenchuyendi.value,
      owner_id: login.user_info.user_profile[0].user_id,
      from_date: tungay.value,
      to_date: denngay.value,
      lat: 6.213213, //vido.value,
      lon: 1.2173812,//kinhdo.value,
      from_where: diemxuatphat.value,
      to_where: diemden.value,
      room_id: login.user_info.user_profile[0].user_id,
      description: motachuyendi.value,
    },
  })
    .then((response) => response.json())
    .then(data => {
      createToast("success");
      setTimeout(() => {
        window.location.reload(true);
      }, 5000);
    })
    .catch(error => {
      createToast("error")

    })

};


// ------------------------------- image -----------------------

const uploadImage = $(".upload_image");
console.log(uploadImage);
const importImage = $(".input_image")

let objImage;
uploadImage.onclick = () => {
  importImage.click();
  importImage.onchange = (e) => {
    objImage = URL.createObjectURL(e.target.files[0]);
    uploadImage.style.backgroundImage = `url('${objImage}')`;
  };
};

setTimeout(() => {
  console.log(objImage);
}, 10000)



if (!login) {
  btnCreateTrip.disabled = true;
  console.log(1);
} else {
  btnCreateTrip.enabled = true;
}