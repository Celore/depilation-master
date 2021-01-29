import './import/modules.js';

$(document).ready(function () {
    const window = $(this);

    console.log(window)

    var sliderReviews = new Swiper('.js-reviews-slider', {
        grabCursor: false,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('input[data-type="phone"]').mask("+7 (999) 999-9999");
    $('input[data-type="email"').mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });;
    jQuery.datetimepicker.setLocale('ru');
    $('input[data-type="date"]').datetimepicker({
        timepicker:false,
        format:'d.m.Y'
    });

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/icon/pin.png',
                iconImageSize: [50, 50],
                iconImageOffset: [-5, -38]
            })
        myMap.geoObjects
            .add(myPlacemark)
    });

    const buttonCloseModal = $('.js-close-modal');
    const openModal = $('.js-open-review');

    if (openModal) {
        openModal.on('click', function() {
            $('.js-modal-reviews').addClass('active');
        });

        buttonCloseModal.on('click', function() {
            $(this).closest('.modal').removeClass('active');
        });
    }

    window.on('click','.js-button-up', function() {
        $('html, body').animate({scrollTop:0}, '300');
    });

    $('.js-anchors').bind("click", function (e) {
        const anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1000);
        e.preventDefault();
    });
    

    window.on('scroll', function() {
        const scrollHeight = $(this).scrollTop();
        const breakpoint = $('.reasons');
        const breakpointPosition = breakpoint.offset().top;
        
        scrollHeight > (breakpointPosition - 100) ? $('.button__up').addClass('js-button-up rotate') : $('.button__up').removeClass('.js-button-up rotate') 
    });

    $('.js-open-menu').on('click', function() {
        $('.menu').addClass('active');
    });

    $('.js-menu-close').on('click', function() {
        $('.menu').removeClass('active');
    });
});