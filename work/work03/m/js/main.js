$(".mainMeun").click(function () {
  $(".blackBg").fadeIn(300);
  $(".sideMenu").animate(
    {
      right: 0,
    },
    300
  );
});

$(".closeMunu, .blackBg").click(function () {
  $(".blackBg").fadeOut(300);
  $(".sideMenu").animate(
    {
      right: -260,
    },
    300
  );
});


$(".mGnb li .m").click(function () {
  var tg = $(this).siblings(".sub");
  var dis = tg.css("display");
  if (dis == "block") {
    $(this).removeClass("on");
    tg.slideUp(300);
  }

  if (dis == "none") {
    $(".mGnb li .m").removeClass("on");
    $(this).addClass("on");
    $(".mGnb li .sub").slideUp(300);
    tg.slideDown(300);
  }
});


var swiper = new Swiper(".mainSlider", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".caseSlider", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next.next",
    prevEl: ".swiper-button-prev.prev",
  },
});


var swiper = new Swiper(".showroom", {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
