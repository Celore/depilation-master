/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules_js__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  var window = $(this);
  console.log(window);
  var sliderReviews = new Swiper('.js-reviews-slider', {
    grabCursor: false,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.js-button-reviews-next',
      prevEl: '.js-button-reviews-prev'
    }
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
      prevEl: '.js-button-blog-prev'
    }
  });
  $('input[data-type="phone"]').mask("+7 (999) 999-9999");
  $('input[data-type="email"').mask("A", {
    translation: {
      "A": {
        pattern: /[\w@\-.+]/,
        recursive: true
      }
    }
  });
  ;
  jQuery.datetimepicker.setLocale('ru');
  $('input[data-type="date"]').datetimepicker({
    timepicker: false,
    format: 'd.m.Y'
  });
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [52.322197, 35.373473],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/img/icon/pin.png',
      iconImageSize: [50, 50],
      iconImageOffset: [-5, -38]
    });
    myMap.geoObjects.add(myPlacemark);
  });
  var buttonCloseModal = $('.js-close-modal');
  var openModal = $('.js-open-review');

  if (openModal) {
    openModal.on('click', function () {
      $('.js-modal-reviews').addClass('active');
    });
    buttonCloseModal.on('click', function () {
      $(this).closest('.modal').removeClass('active');
    });
  }

  window.on('click', '.js-button-up', function () {
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  $('.js-anchors').bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 30
    }, 1000);
    e.preventDefault();
  });
  window.on('scroll', function () {
    var scrollHeight = $(this).scrollTop();
    var breakpoint = $('.reasons');
    var breakpointPosition = breakpoint.offset().top;
    scrollHeight > breakpointPosition - 100 ? $('.button__up').addClass('js-button-up rotate') : $('.button__up').removeClass('.js-button-up rotate');
  });
  $('.js-open-menu').on('click', function () {
    $('.menu').addClass('active');
  });
  $('.js-menu-close').on('click', function () {
    $('.menu').removeClass('active');
  });
  var priceButton = $('.js-button-price');
  var modalPrice = $('.js-modal-price');

  if (modalPrice) {
    priceButton.on('click', function () {
      var type = $(this).data('type');
      var title = $(this).text();
      $(".modal--price[data-type=\"".concat(type, "\"]")).addClass('active');
      $(".modal--price[data-type=\"".concat(type, "\"]")).find('.js-modal-title').text(title);

      if (type == 'legs') {
        var butt = $(this).data('buttocks');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-buttocks]').find('.js-modal-price-text').text(butt);
        var hips = $(this).data('hips');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-hips]').find('.js-modal-price-text').text(hips);
        var knees = $(this).data('knees');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-knees]').find('.js-modal-price-text').text(knees);
        var legsfull = $(this).data('legsfull');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-legsfull]').find('.js-modal-price-text').text(legsfull);
      } else if (type == 'hands') {
        var elbow = $(this).data('elbow');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-elbow]').find('.js-modal-price-text').text(elbow);
        var full = $(this).data('full');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-full]').find('.js-modal-price-text').text(full);
        var armpits = $(this).data('armpits');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-armpits]').find('.js-modal-price-text').text(armpits);
      } else if (type == 'body') {
        var _full = $(this).data('full');

        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-full]').find('.js-modal-price-text').text(_full);
        var road = $(this).data('road');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-road]').find('.js-modal-price-text').text(road);
        var back = $(this).data('back');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-back]').find('.js-modal-price-text').text(back);
        var sback = $(this).data('sback');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-sback]').find('.js-modal-price-text').text(sback);
        var bikiniclassic = $(this).data('bikiniclassic');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-bikiniclassic]').find('.js-modal-price-text').text(bikiniclassic);
        var bikinideep = $(this).data('bikinideep');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-bikinideep]').find('.js-modal-price-text').text(bikinideep);
      } else if (type == 'face') {
        var lip = $(this).data('lip');
        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-lip]').find('.js-modal-price-text').text(lip);

        var _full2 = $(this).data('full');

        $(".modal--price[data-type=\"".concat(type, "\"]")).find('[data-full]').find('.js-modal-price-text').text(_full2);
      }
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map