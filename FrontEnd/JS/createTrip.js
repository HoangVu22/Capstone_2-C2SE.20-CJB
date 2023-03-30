const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tab = $(".createTrip-wraper");
const tab1 = $(".createTrip-wraper1");
const btn = $(".button1-btn");
const btn1 = $(".button2-btn");
const goBack = $(".goBack");
const startCreateTrip = $(".startCreateTrip");
btn.style.backgroundColor = "#0000ff4a";

btn.onclick = () => {
  tab.style.display = "block";
  tab1.style.display = "none";
  btn.style.backgroundColor = "#0000ff4a";
  btn1.style.backgroundColor = "white";
};

const formNextBtn = $(".form-next button");
formNextBtn.onclick = () => {
  tab.style.display = "none";
  tab1.style.display = "block";
  btn.style.backgroundColor = "white";
  btn1.style.backgroundColor = "#0000ff4a";
  tab1.style.transition = "all 0.9 ease";
  tab1.style.marginTop = "90px";
};

goBack.onclick = () => {
  tab.style.display = "block";
  tab1.style.display = "none";
  btn.style.backgroundColor = "#0000ff4a";
  btn1.style.backgroundColor = "white";
};

btn1.onclick = () => {
  tab.style.display = "none";
  tab1.style.display = "block";
  btn.style.backgroundColor = "white";
  btn1.style.backgroundColor = "#0000ff4a";
  tab1.style.transition = "all 0.9 ease";
  tab1.style.marginTop = "102px";
};
