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
            nextEl: '.js-button-reviews-next',
            prevEl: '.js-button-reviews-prev',
        },
    });

    var sliderBlog = new Swiper('.js-blog-slider', {
        grabCursor: false,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.js-button-blog-next',
            prevEl: '.js-button-blog-prev',
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
                center: [52.322197, 35.373473],
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
                iconImageHref: '/img/icon/pin.png',
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

    const priceButton = $('.js-button-price');
    const modalPrice = $('.js-modal-price');

    if (modalPrice) {
        priceButton.on('click', function() {
            const type = $(this).data('type');
            const title = $(this).text();
            $(`.modal--price[data-type="${type}"]`).addClass('active');
            $(`.modal--price[data-type="${type}"]`).find('.js-modal-title').text(title);
            if (type == 'legs') {
                const butt = $(this).data('buttocks');
                $(`.modal--price[data-type="${type}"]`).find('[data-buttocks]').find('.js-modal-price-text').text(butt);
                const hips = $(this).data('hips');
                $(`.modal--price[data-type="${type}"]`).find('[data-hips]').find('.js-modal-price-text').text(hips);
                const knees = $(this).data('knees');
                $(`.modal--price[data-type="${type}"]`).find('[data-knees]').find('.js-modal-price-text').text(knees);
                const legsfull = $(this).data('legsfull');
                $(`.modal--price[data-type="${type}"]`).find('[data-legsfull]').find('.js-modal-price-text').text(legsfull)
            } else if (type == 'hands') {
                const elbow = $(this).data('elbow');
                $(`.modal--price[data-type="${type}"]`).find('[data-elbow]').find('.js-modal-price-text').text(elbow);
                const full = $(this).data('full');
                $(`.modal--price[data-type="${type}"]`).find('[data-full]').find('.js-modal-price-text').text(full);
                const armpits = $(this).data('armpits');
                $(`.modal--price[data-type="${type}"]`).find('[data-armpits]').find('.js-modal-price-text').text(armpits);
            } else if (type == 'body') {
                const full = $(this).data('full');
                $(`.modal--price[data-type="${type}"]`).find('[data-full]').find('.js-modal-price-text').text(full);
                const road = $(this).data('road');
                $(`.modal--price[data-type="${type}"]`).find('[data-road]').find('.js-modal-price-text').text(road);
                const back = $(this).data('back');
                $(`.modal--price[data-type="${type}"]`).find('[data-back]').find('.js-modal-price-text').text(back);
                const sback = $(this).data('sback');
                $(`.modal--price[data-type="${type}"]`).find('[data-sback]').find('.js-modal-price-text').text(sback);
                const bikiniclassic = $(this).data('bikiniclassic');
                $(`.modal--price[data-type="${type}"]`).find('[data-bikiniclassic]').find('.js-modal-price-text').text(bikiniclassic);
                const bikinideep = $(this).data('bikinideep');
                $(`.modal--price[data-type="${type}"]`).find('[data-bikinideep]').find('.js-modal-price-text').text(bikinideep);
            } else if (type == 'face') {
                const lip = $(this).data('lip');
                $(`.modal--price[data-type="${type}"]`).find('[data-lip]').find('.js-modal-price-text').text(lip);
                const full = $(this).data('full');
                $(`.modal--price[data-type="${type}"]`).find('[data-full]').find('.js-modal-price-text').text(full);
            }
        })
    }
});