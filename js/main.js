$(document).ready(() => {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn"
    });
});