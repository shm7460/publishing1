$("span").click(function () {
  // 자신이 클릭될때는 active 클래스를 추가해라
  $(this).addClass("active");
  // 자신이 클릭될때 자신의 형제에게는 active클래스를 지워라
  $(this).siblings().removeClass("active");
});
