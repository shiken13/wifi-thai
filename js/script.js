//ハンバーガーメニュー
$(function(){
  $('.nav-btn').on('click', function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

//wow機能
$(function(){
  new WOW().init();
});

// topへ移動
$(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });


});

// topへ移動
$(function() {
  var fix = $('.request');   
  fix.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {  //100pxスクロールしたら表示
          fix.fadeIn();
      } else {
          fix.fadeOut();
      }
  });

});



$(function(){
  // 自動スライド
  $('.slick-srider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // dotsClass: 'slick-dots2',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          // slidesToShow: 5,
          // slidesToScroll: 1,
          // infinite: true,
          // centerPadding:'0',
          centerMode:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:'0px',
          centerMode:true,
        }
      }
    ]
  });
});
