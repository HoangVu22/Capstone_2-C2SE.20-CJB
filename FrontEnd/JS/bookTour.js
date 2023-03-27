let endDate = new Date("3/28/2023 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
    }
}, 1000);

$('.slides2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800
});

const z = document.querySelector.bind(document)
const slickPre = z('.fa-chevron-left');
const slickNext = z('.fa-chevron-right');
const findSlickPrev = z('.find-slick-left');
const findSlickNext = z('.find-slick-right');
const pre = z('.slick-prev');
const next = z('.slick-next');

slickPre.onclick = () => {
    pre.click();
    
}
slickNext.onclick = () => {
    next.click();
    
}