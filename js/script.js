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

//アコーディオン機能
$(function(){
  $('.js-accordion').on('click', function(){
    $(this).toggleClass('-active');
    $(this).next().slideToggle();
  });
});


