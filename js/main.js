// use "strict";

// Slick Slider - "Header"
$(document).ready(function(){
    $('.am_works__items').slick({
        dots: false,
        // dotsClass: 'slider-dots',
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<a href="#" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></a>',
        nextArrow: '<a href="#" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></a>',
        // appendArrows: $(.header_slider__arrow),
        cssEase: 'linear'
    });
  });

  // Fancybox

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

   // Прокрутка страницы вверх

   jQuery(function () {

    let btnUp = jQuery(".but_up");

    let top = jQuery(this).scrollTop();
    if (top > 100) {
        btnUp.fadeIn(500);
    } else {
        btnUp.fadeOut(500);
    }

    jQuery(document).on("scroll", function () {
        let top = jQuery(this).scrollTop();
        if (top > 100) {
            btnUp.fadeIn(500);
        } else {
            btnUp.fadeOut(500);
        }
    });

    btnUp.on("click", function () {
      jQuery("html,body").animate({
            scrollTop: 0
        }, 400);
    });
});

// Отправка почты с сайта

// Отправка данных на сервер

function send(event, php){
  
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }

