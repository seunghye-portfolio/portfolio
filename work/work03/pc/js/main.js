$(".gnb .mainMenu")
  .mouseover(function () {
    $(this).find(".sub").stop().slideDown(300);
  })
  .mouseout(function () {
    $(this).find(".sub").stop().slideUp(300);
    return false;
  });


var swiper1 = new Swiper(".mainSlider", {
  speed : 1000,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper2 = new Swiper(".caseSlider", {
  effect: 'fade',
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper3 = new Swiper(".result", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var bestswiper = new Swiper(".showroom", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2000,
    autoplayDisableOnInteraction: true,
  },
});


$(".pdMeun .pdList .m").click(function () {
  var tg = $(this).siblings(".sublist");
  var dis = tg.css("display");
  if (dis == "block") {
    $(this).removeClass("active");
    tg.slideUp(300);
  }
  if (dis == "none") {
    $(".pdMeun .pdList .m").removeClass("active");
    $(this).addClass("active");
    $(".sublist").slideUp(300);
    tg.slideDown(300);
  }
  return false;
});