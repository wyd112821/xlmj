// 搜索框交互
$('.search-mask').on('click', function () {
  $('.search-box input').addClass('unfold');
  $(this).hide();
});

$(document).on('click', function (event) {
  var evt = event.srcElement ? event.srcElement : event.target;
  evt = $(evt);
  if (evt.hasClass("search-box") || evt.parents(".search-box").length != 0) {
    return;
  } else {
    $('.search-box input').removeClass('unfold');
    $('.search-mask').show();
  }
})

// 顶部导航滚动悬浮
$(window).scroll(function () {
  if ($(window).scrollTop() > $('.header-top').height()) {
    $(".header-bottom").addClass('header-bottom-fixed');
  } else {
    $(".header-bottom").removeClass('header-bottom-fixed');
  }
});

// 侧边栏 联系我们
$('.contact-us').hover(function(){
  $('.contact-box').addClass('contact-box-show');
}, function(){
  $('.contact-box').removeClass('contact-box-show');
})

// 侧边栏 返回顶部
$('.back-top').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);
});	