$(function(){

    $(".slider__inner, .news__slider-inner").slick({
        /* https://kenwheeler.github.io/slick/ */
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        /* Отключение бесконечной прокрутки слайда  */
        infinite: false
    });
    /*  Стилизация селектов */
    $('select').styler();



});