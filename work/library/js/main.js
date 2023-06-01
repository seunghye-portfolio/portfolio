$(".btnMenu").click(function () {
  $(".blackBg").fadeIn(300);
  $(".sideMenu").animate(
    {
      left: 0,
    },
    500
  );
});

$(".closeMenu, .blackBg").click(function () {
  $(".blackBg").fadeOut(300);
  $(".sideMenu").animate(
    {
      left: -190,
    },
    500
  );
});

$(".mGnb li .m").click(function () {
  var tg = $(this).siblings(".mSub");
  var dis = tg.css("display");
  if (dis == "block") {
    $(this).removeClass("on");
    tg.slideUp(300);
  }

  if (dis == "none") {
    $(".mGnb li .m").removeClass("on");
    $(this).addClass("on");
    $(".mGnb li .mSub").slideUp(300);
    tg.slideDown(300);
  }
});

$(".gnb .subWrap")
  .mouseover(function () {
    $(this).find(".sub").stop().slideDown();
  })
  .mouseout(function () {
    $(this).find(".sub").stop().slideUp();
  });

var swiper1 = new Swiper(".book", {
  spaceBetween: -50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpointsInverse: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".movieBox", {
  loop: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".tabBtn", {
  spaceBetween: -32,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpointsInverse: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
  },
});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    let id = input.value;
    let thisSwiper = document.getElementById("swiper" + id);
    thisSwiper.swiper.update();
  });
});

var siteLink = new Swiper(".siteLink", {
  spaceBetween: 0,
});
