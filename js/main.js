// use "strict";

// Slick Slider - "Header"
$(document).ready(function(){
    $('.header_slider').slick({
        dots: true,
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
// Slick Slider - "Documents"
$(document).ready(function(){
  $('.docs_slider').slick({
      dots: false,
      // dotsClass: 'slider-dots',
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      fade: true,
      prevArrow: '<a href="#" class="slick-prev slick-prev__mod"><svg width="33" height="53" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.77689 28.5681L25.3626 52.1533C25.9081 52.6992 26.6363 53 27.4127 53C28.1892 53 28.9174 52.6992 29.4629 52.1533L31.1998 50.4168C32.3301 49.2853 32.3301 47.4462 31.1998 46.3165L11.3944 26.511L31.2218 6.68355C31.7673 6.13761 32.0685 5.40984 32.0685 4.6338C32.0685 3.8569 31.7673 3.12913 31.2218 2.58276L29.4849 0.846699C28.939 0.300762 28.2112 0 27.4347 0C26.6582 0 25.93 0.300762 25.3845 0.846699L1.77689 24.4535C1.23009 25.0011 0.929754 25.7324 0.931479 26.5097C0.929754 27.29 1.23009 28.0208 1.77689 28.5681Z" fill="#383333" fill-opacity="0.6"/></svg></a>',
      nextArrow: '<a href="#" class="slick-next slick-next__mod"><svg width="33" height="53" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.2231 24.4319L7.63741 0.8467C7.0919 0.300762 6.3637 0 5.58723 0C4.81077 0 4.08256 0.300762 3.53705 0.8467L1.80013 2.58319C0.669907 3.71471 0.669907 5.55375 1.80013 6.68355L21.6056 26.489L1.77816 46.3165C1.23265 46.8624 0.931458 47.5902 0.931458 48.3662C0.931458 49.1431 1.23265 49.8709 1.77816 50.4172L3.51508 52.1533C4.06102 52.6992 4.78879 53 5.56526 53C6.34172 53 7.06993 52.6992 7.61544 52.1533L31.2231 28.5465C31.7699 27.9989 32.0702 27.2676 32.0685 26.4903C32.0702 25.71 31.7699 24.9792 31.2231 24.4319Z" fill="#383333" fill-opacity="0.6"/></svg></a>',
      // appendArrows: $(.header_slider__arrow),
      cssEase: 'linear'
  });
});
// Slick Slider - "Partners"
$(document).ready(function(){
  $('.partners_slider').slick({
      dots: true,
      dotsClass: 'slick-dots partners-dots',
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: false,
      prevArrow: '<a href="#" class="slick-prev slick-prev__mod"><svg width="33" height="53" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.77689 28.5681L25.3626 52.1533C25.9081 52.6992 26.6363 53 27.4127 53C28.1892 53 28.9174 52.6992 29.4629 52.1533L31.1998 50.4168C32.3301 49.2853 32.3301 47.4462 31.1998 46.3165L11.3944 26.511L31.2218 6.68355C31.7673 6.13761 32.0685 5.40984 32.0685 4.6338C32.0685 3.8569 31.7673 3.12913 31.2218 2.58276L29.4849 0.846699C28.939 0.300762 28.2112 0 27.4347 0C26.6582 0 25.93 0.300762 25.3845 0.846699L1.77689 24.4535C1.23009 25.0011 0.929754 25.7324 0.931479 26.5097C0.929754 27.29 1.23009 28.0208 1.77689 28.5681Z" fill="#383333" fill-opacity="0.6"/></svg></a>',
      nextArrow: '<a href="#" class="slick-next slick-next__mod"><svg width="33" height="53" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.2231 24.4319L7.63741 0.8467C7.0919 0.300762 6.3637 0 5.58723 0C4.81077 0 4.08256 0.300762 3.53705 0.8467L1.80013 2.58319C0.669907 3.71471 0.669907 5.55375 1.80013 6.68355L21.6056 26.489L1.77816 46.3165C1.23265 46.8624 0.931458 47.5902 0.931458 48.3662C0.931458 49.1431 1.23265 49.8709 1.77816 50.4172L3.51508 52.1533C4.06102 52.6992 4.78879 53 5.56526 53C6.34172 53 7.06993 52.6992 7.61544 52.1533L31.2231 28.5465C31.7699 27.9989 32.0702 27.2676 32.0685 26.4903C32.0702 25.71 31.7699 24.9792 31.2231 24.4319Z" fill="#383333" fill-opacity="0.6"/></svg></a>',
      // appendArrows: $(.header_slider__arrow),
      cssEase: 'linear'
  });
});
// Accordion
const acc = document.getElementsByClassName("accord_item__title");
let i;

for (i = 0; i < acc.length; i++) {
  // acc[i].classList.remove('accord_active');
  // acc.forEach()
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accord_active");

    const accText = this.nextElementSibling;

    accText.classList.toggle("accord_show");

    // if (accText.style.maxHeight){
    //   accText.style.maxHeight = null;
    // } else {
    //   accText.style.maxHeight = accText.scrollHeight + "px";
    // } 
  });
  
}

