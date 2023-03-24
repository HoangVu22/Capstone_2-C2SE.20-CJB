const pre1 = document.getElementsByClassName('slick-prev');
const next1 = document.getElementsByClassName('slick-next');

$('.slides2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800
});

findSlickPrev.onclick = () => {
   pre1[1].click();
}
findSlickNext.onclick = () => {
    next1[1].click();
}