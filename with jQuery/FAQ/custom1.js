$(function () {
  // 첫번째 content를 미리 보여준다
  $(".accordion .content").eq(0).show();
  $(".accordion .title").click(function () {
    $(this).siblings(".accordion .content").slideUp();
    $(this).next().stop().slideToggle();

    $(this).toggleClass("active");
    $(this).siblings(".accordion .title").removeClass("active");
  });
});
