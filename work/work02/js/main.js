AOS.init();

$(".gnb").mouseover(function(){
  $(this).stop().animate({
      height:469
  },500);
  $(".gnbBg").stop().animate({
      height:410
  },500);
}).mouseout(function(){
  $(this).stop().animate({
      height:59
  },500);
  $(".gnbBg").stop().animate({
      height:0
  },500);
});


$(".btnMenu").click(function () {
  $(".blackBg").fadeIn(300);
  $("#sideMenu").animate({
    left: 0
  }, 300);
});
$(".closeBtn, .blackBg").click(function () {
  $(".blackBg").fadeOut(300);
  $("#sideMenu").animate({
    left: -320
  }, 300);
});


$(".mGnb li .m").click(function () {
  var tg = $(this).siblings(".sub");
  var dis = tg.css("display");
  if (dis === "block") {
    $(this).removeClass("on");
    tg.slideUp(300);
  }
  if (dis === "none") {
    $(".mGnb li .m").removeClass("on");
    $(this).addClass("on");
    $(".mGnb li .sub").slideUp(300);
    tg.slideDown(300);
  }
  return false;
});


var swiper = new Swiper('.mainSlider', {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper('.newProduct', {
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    970: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});


var swiper = new Swiper('.best', {
  slidesPerView: 1,
  effect: 'fade',
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});



var swiper = new Swiper('.campaign', {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    495: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    }
  }
});

