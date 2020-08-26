new WOW().init();

// header&footer載入
$(function(){
    $("header").append('<h1 class="wow slideInUp" data-wow-duration="1s"><a href="01_index.html"><img src="img/logo_white.png" alt="大睦建設股份有限公司"></a></h1><a class="toggle"><img src="img/icon_menu.svg"></a><nav class="menu"><ul><li class="wow slideInUp" data-wow-duration="1s"><a href="04_aboutUs.html">關於大睦</a></li><li class="wow slideInUp"><a href="02_currentProject.html">熱銷大睦</a></li><li class="wow slideInUp" data-wow-duration="1s"><a href="05_news.html">大睦消息</a></li><li class="wow slideInUp" data-wow-duration="1s"><a href="07_classicProject.html">大睦工程</a></li><li class="wow slideInUp" data-wow-duration="1s"><a href="09_contactUs.html">聯繫我們</a></li><li><a href="https://www.facebook.com/%E5%A4%A7%E7%9D%A6%E5%BB%BA%E8%A8%AD%E6%A9%9F%E6%A7%8B-2553463084879653/" target="_blank"><img class="wow slideInUp" data-wow-duration="1s" src="img/icon_facebook.svg" alt="facebook"></a></li><li><a href="#" target="_blank"><img class="wow slideInUp" data-wow-duration="1s" src="img/icon_ig.svg" alt="ig"></a></li><li><a href="#" target="_blank"><img class="wow slideInUp" data-wow-duration="1s" src="img/icon_line.svg" alt="line"></a></li><li><a href="#" target="_blank"><img class="wow slideInUp" data-wow-duration="1s" src="img/icon_vedio.svg" alt="vedio"></a></li></ul><div class="icon-close"><svg id="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="close-rotate" d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" /></svg></div></nav>');

    $("footer").append('<div class="copyright">Copyright © by Dah Muh. All Rights Reserved.</div><nav><ul><li><a href="02_currentProject.html">線上熱銷</a></li><li><a href="04_aboutUs.html">關於大睦</a></li><li><a href="05_news.html">最新消息</a></li><li><a href="07_classicProject.html">作品典藏</a></li><li><a href="09_contactUs.html">客戶服務</a></li></ul></nav><div class="gototop"><div class="line"></div><div class="txt pc"><img src="img/gototop_pc.svg"></div><div class="txt mob"><img src="img/gototop_mob.svg"></div></div>');
});

// 手機選單
$(function(){
    var $mobile = $('#header') ,
        $toggle = $mobile.find('.toggle') ,
        $menu = $mobile.find('.menu');    
    // $toggle.click(function(e) {
    //     $menu.slideToggle()
    // });

    $('.toggle').click(function() {
        $menu.addClass('openmenu');
    });
    $('.icon-close').click(function() {
        $menu.removeClass('openmenu');
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70)  {          /* 要滑動到選單的距離 */
            $('.toggle').css("background-color","rgba(158, 125, 62, 1)");   /* 幫選單加上固定效果 */
        }else{
            $('.toggle').css("background-color","rgba(158, 125, 62, 0)");
        }
    });
});


var slick9
// 左右滑動態
$(document).ready(function(){
    $('.slider1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
    });

    $('.slider3').slick({
        infinite: true,
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider4').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 992,
            settings: {  
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px'
            }
          }
        ]
    });
    $('.slider5').slick({
        // infinite: true,
        // dots: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider6').slick({
        infinite: true,
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    $('.slider7').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-counter').html(slick.currentSlide + 1 +'<div>/</div>'+ slick.slideCount);
    });

    $('.slider7').slick({
        infinite: true,
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider8').slick({
        infinite: true,
        // dots: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider2').slick({
        infinite: true,
        arrows: false,
        draggable: false,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 991,
            settings: {
                draggable: true,
                dots: true
            }
          }
        ]
    });

    $('.slider9').on('reInit', function(event, slick, currentSlide, nextSlide){

        // $('.slick-counter').html(slick.currentSlide +'<div>/</div>'+ slick.slideCount);
        // $('.slider9').slick('slickGoTo', 2)
        slick.slickGoTo(1,false)
    });

    $('.slider9').on('init', function(event, slick, currentSlide, nextSlide){
        slick.slickGoTo(1,false)
    });

    $('.slider9').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slider2').slick('slickGoTo', nextSlide - 1)
        $('.slick-counter').html((slick.currentSlide + 1) +'<div>/</div>'+ slick.slideCount);
    });

    slick9 = $('.slider9').slick({
        infinite: true,
        // arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
    });

});


 // scrollTop
 $(function () {
    $('.gototop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    $('.openFeatures').click(function() {
        $('.popup').addClass('is-acted');
    });
    $('#openVedio').click(function() {
        $('.popup').addClass('is-acted');
    });
    $('.close').click(function() {
        $('.popup').removeClass('is-acted');
    });

    $('.themeSelect li').click(function() {
        $(this).toggleClass('active').siblings().removeClass("active");
    });
    
  });
  
