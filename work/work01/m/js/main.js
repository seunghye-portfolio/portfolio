

var swiper = new Swiper('#mainSlider', {
    speed: 800,
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
      delay: 2000,
      },
});


 var bestswiper = new Swiper('.bestMenu', {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
    delay: 2000,
    autoplayDisableOnInteraction :true,
  },
});


new Swiper('.product', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
});

let tabInputs = document.querySelectorAll('.tabInput');

tabInputs.forEach(function (input) {

    input.addEventListener('change', function () {
        let id = input.value;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });

});



var swiper = new Swiper('.event', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
    delay: 2000,
    },
});


 $(".btnMenu").click(function(){
    $(".blackBg").fadeIn(300);
    $(".sideMenu").animate({
       right:0
    },300);
 });
 $(".closeMenu, .blackBg").click(function(){
    $(".blackBg").fadeOut(300);
    $(".sideMenu").animate({
       right:-250
    },300);
 });
 

 $(".mGnb li .m").click(function(){
    var tg = $(this).siblings(".sub");
    var dis = tg.css("display");
    if(dis=="block"){
       $(this).removeClass("on");
       tg.slideUp(300);
    };
    if(dis=="none"){
       $(".mGnb li .m").removeClass("on");
       $(this).addClass("on");
       $(".mGnb li .sub").slideUp(300);
       tg.slideDown(300);
    };
    return false;
 });