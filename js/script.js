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
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:'0px',
          centerMode:true,
        }
      }
    ]
  });
});
