const headerNavForm = document.querySelector(".header-nav-form");
const headerForm = document.querySelector(".header-form");
const headerFormLogin = headerNavForm.querySelector(".header-form-login");
const headerFormLogout = document.querySelector(".header-form-logout");
const login = JSON.parse(window.localStorage.getItem("login"));
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


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


const names = $('.header-name1');
const avatarUser = $("#avatar_user");
console.log(avatarUser);
if (login) {
  names.innerText = login.user_info.name;
  avatarUser.src = login.user_info.user_profile[0].avatar;
}

// ----------- ẩn hiện create group-----------
const group = document.querySelector('.group')
const CRBody = document.querySelector('#CR-body')
const roomClose = document.querySelector('.room-close i')
group.onclick = function () {
    CRBody.style.display = 'block'
}
roomClose.onclick = function () {
    CRBody.style.display = 'none'
}

// --------------- create room ------------------

const createRoom = $('.create-room');
const roomName = $("#name-room");
const roomDescription = $("#description-room");
console.log(login);
if(login)
{
    createRoom.onclick = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.form-control');
        const requestValues = {};
    
        inputs.forEach(item => {
            requestValues[item.attributes.name.value] = item.value;
        });
        console.log(requestValues);
        fetch("http://127.0.0.1:8000/api/personal/room/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                owner_id: login.user_info.user_profile[0].id,
                name: roomName.value,
                description: roomDescription.value,
            }),
            data: ({
                owner_id: login.user_info.user_profile[0].id,
                name: roomName.value,
                description: roomDescription.value,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.status);
                if (data.status === 200) {
                    alert("Create room success ... !!!")
                    console.log(data);
                } else {
                    alert(data.msg)
                }
            })
    }
    
}

// ------------------------- render room --------------------------------------

const api = "http://127.0.0.1:8000/api/personal/room/all";

var sliderFind = $(".group-content");

var htmlss = "";
function getTours() {
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const tours = data.allRoom;
            console.log(data.allRoom);
            htmls = tours.map((tour) => {
           return `<div class="group-item">
           <div class="group-img">
               <img src="../IMAGES/slides/slide-5.png" alt="">
           </div>
           <div class="group-info">
               <h4 class="group-info-name">${tour.name}</h4>
               <p>30 thành viên</p>
               <button>Tham gia</button>
           </div>
       </div>`
        });
    return sliderFind.innerHTML = htmls.join("");
    })}


getTours();
