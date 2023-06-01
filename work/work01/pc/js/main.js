$(".lang .btn.off").click(function () {
    $(this).css("display", "none");
    $(".lang .btn.on").css("display", "block");
    $(".lang .list").stop().slideDown(300);
    return false;
});


$(".lang .btn.on").click(function () {
    $(this).css("display", "none");
    $(".lang .btn.off").css("display", "block");
    $(".lang .list").stop().slideToggle(300);
    return false;
});




$("#header .gnb").mouseover(function () {
    $(this).stop().animate({
        height: 230
    }, 400);
    $("#header .subBg").stop().animate({
        height: 200
    }, 400);
}).mouseout(function () {
    $(this).stop().animate({
        height: 67
    }, 400);
    $("#header .subBg").stop().animate({
        height: 0
    }, 400);
});



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
     pagination: {
        el: '.best__pager',
        clickable: true,
    },
    spaceBetween: 70,
    slidesPerView: 3,
    loop: true,
    autoplay: {
    delay: 2000,
    autoplayDisableOnInteraction :true,
  },
});

$(".bestMenu").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});





new Swiper('.product', {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 6,
    navigation: {
        nextEl: '.product__btnR',
        prevEl: '.product__btnL',
    },
    autoplay: {
    delay: 2000,
    },
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
