$(".gnbInfo.gnb1 .btn.off").click(function () {
    $(this).css("display", "none");
    $(".gnbInfo.gnb1 .btn.on").css("display", "block");
    $(".gnbInfo.gnb1 .list").stop().slideDown(300);
    return false;
});


$(".gnbInfo.gnb1 .btn.on").click(function () {
    $(this).css("display", "none");
    $(".gnbInfo.gnb1 .btn.off").css("display", "block");
    $(".gnbInfo.gnb1 .list").stop().slideToggle(300);
    return false;
});



$(".gnbInfo.gnb2 .btn.off").click(function () {
    $(this).css("display", "none");
    $(".gnbInfo.gnb2 .btn.on").css("display", "block");
    $(".gnbInfo.gnb2 .list").stop().slideDown(300);
    return false;
});


$(".gnbInfo.gnb2 .btn.on").click(function () {
    $(this).css("display", "none");
    $(".gnbInfo.gnb2 .btn.off").css("display", "block");
    $(".gnbInfo.gnb2 .list").stop().slideToggle(300);
    return false;
});



var swiper = new Swiper('.new', {
    speed: 800,
    loop: true,
    slidesPerView: 1,
    autoplay: {
    delay: 2000,
    },
});



 $(".cont2 .tab li").click(function(){
     var i = $(this).index();     
     $(".cont2 .tab li").removeClass("on");
     $(this).addClass("on");
  $(".cont2 .tabIn").removeClass("on");
  $(".cont2 .tabIn").eq(i).addClass("on");
  return false;
 });    



