// function img(anything) {
//   document.querySelector(".slide").src = anything;
// }

// function change(change) {
//   const line = document.querySelector(".image");
//   line.style.background = change;
// }

$('.popular-slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000
});

const z = document.querySelector.bind(document)
const zz = document.querySelectorAll.bind(document)
const slickPre = z('.fa-chevron-left');
const slickNext = z('.fa-chevron-right');
const findSlickPrev = z('.find-slick-left');
const findSlickNext = z('.find-slick-right');
const pre = z('.slick-prev');
const next = z('.slick-next')

slickPre.onclick = () => {
    pre.click();
    
}
slickNext.onclick = () => {
    next.click();
    
}


const pre1 = document.getElementsByClassName('slick-prev');
const next1 = document.getElementsByClassName('slick-next');

$('.slides2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000
});

findSlickPrev.onclick = () => {
   pre1[1].click();
}
findSlickNext.onclick = () => {
    next1[1].click();
}




