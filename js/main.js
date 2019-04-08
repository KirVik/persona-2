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
    $('.product-photo__slader').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/product-foto/rewind-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/product-foto/rewind-right.png"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
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

    // Модальные окна (Регистрации)
    $('.registracion').click(function () {
      $('#forms__check-in').arcticmodal();
  });
  // Модальные окна (Регистрации) END

    // открытие личного кабинета
    $('.personal-area-aside__link_personal-data').click(function () {
        $('.displey_none').toggleClass('displey_bl');
    });
// открытие личного кабинета END
    
});