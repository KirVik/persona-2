$(function (){
    $('.slader').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        prevArrow: false,
        nextArrow: false,
    });
    
    // гамбургер
    $('.menu-open').on("click", function (event) {
        event.stopPropagation();
        $('.menu-collapse').toggleClass('d-none');
        $(".menu, li .top-menu__item").toggleClass("menu-opened");
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-open').length) {
            $(".menu, li .top-menu__item").removeClass("menu-opened");
            $('.menu-collapse').addClass('d-none');

        };
        $(document).ready(function() {   
            $('.manicure-products__link').click(function(e) {
            e.preventDefault();
    });
        });
    });
    // Модальные окна (каталога товаров)
    $('.manicure-products__link, .personal-area-aside__link_catalog').click(function () {
        $('#catalog-product').arcticmodal();
    });
    // Модальные окна (каталога товаров) END

    // Модальные окна (Авторизация)
    $('.authorizaciy').click(function () {
        $('#authorization').arcticmodal();
    });
    // Модальные окна (Авторизация) END

    // открытие личного кабинета
    $('.personal-area-aside__link_area').click(function () {
        $('.displey_none').toggleClass('displey_bl');
    });
// открытие личного кабинета END
    
});