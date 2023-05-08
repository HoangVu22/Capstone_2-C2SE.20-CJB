const ss = document.querySelector.bind(document);
var sliderFind = ss(".list-tour");
const api = "http://127.0.0.1:8000/api/ts/tour";
const login = JSON.parse(window.localStorage.getItem("login"));
var i=0;
let htmls = "";
function getTours(api) {
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const tours = data;
            console.log(tours);
            htmls = tours.map((tour,index) => {
                return `
        <tr class="list-residence">
                        <td class="list-content list-info data-id="${index}">
                            <div class="list-info-img">
                                <img src="" alt="">
                            </div>
                            <div class="list-info-content">
                                <h3>${tour.name}</h3>
                                <span>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>Nơi khởi hành:${tour.address}</p>
                                </span>
                                <span>
                                    <i class="fa-solid fa-street-view"></i>
                                    <p>Số lượng người: ${tour.slot} </p>
                                </span>
                                <span>
                                    <i class="fa-solid fa-sack-dollar"></i>
                                    <p>Giá tiền: ${tour.price}/người</p>
                                </span>
                            </div>
                        </td>
                        <td class="list-content list-date">
                            <p>${tour.from_date}</p>
                        </td>
                        <td class="list-content list-jojned">
                            <p>100</p>
                        </td>
                        <td class="list-content list-jojned status-green">
                            <button>Đang đi</button>
                        </td>
                        <td class="list-content list-action">
                            <div class="" style="display: flex; align-items: center; justify-content: center; text-align: center;">
                                <a href="./TS-postTour.html">
                                    <i class="fa-solid fa-pencil"></i>
                                </a>
                                <!-- <i class="fa-solid fa-trash-can"></i> -->
                                <a href="#modal-opened" class="link-1 click-closed" id="modal-closed"><i class="fa-solid fa-trash-can"></i></a>
                            </div>

                            <div class="modal-container" id="modal-opened">
                                <div class="modal">

                                    <div class="modal__details">
                                        <h1 class="modal__title">Xác nhận xóa</h1>
                                        <p class="modal__description">Bạn có thật sự muốn xóa hay không ?</p>
                                    </div>

                                    <div class="">
                                        <button class="modal__btn">No</button>
                                        <button class="modal__btn" onclick="handleDeleteTourTS(${tour.id},${tour.ts_id})">Yes</button>
                                    </div>

                                    <a href="#modal-closed" class="link-2"></a>

                                </div>
                            </div>
                        </td>
                    </tr>
      `;
            });
               sliderFind.innerHTML = htmls.join("");
            // return htmls;
        })
}

if (login) {
    getTours(api);
}


// const aaa = document.querySelectorAll('.list-info')
// console.log(aaa);

const z = document.querySelector.bind(document);
const logout = z('.form-logout');
logout.onclick = () => {
  alert('Bạn chắc chắn muốn thoát ?')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.href = 'http://localhost:3000/home.html';
}

// ------------------------ delete tourTS ----------------------------------
function handleDeleteTourTS(id , ts_id){
    fetch("http://127.0.0.1:8000/api/ts/tour/delete/"+id+"?ts_id="+ts_id,{
        method: "DELETE ",
    })
        .then(res => res.json())
        .then(data=>{ console.log(data);})
    
}
