$('.slides2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800
});

const z = document.querySelector.bind(document)
const pre = z('.slick-prev');
const next = z('.slick-next');
const slickPre = z('.fa-chevron-left');
const slickNext = z('.fa-chevron-right');

console.log(pre +' ' +next +' '+slickPre + ' '+slickNext);

slickPre.onclick = () => {
    pre.click();
    
}
slickNext.onclick = () => {
    next.click();
}