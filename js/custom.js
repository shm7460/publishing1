// p태그를 css로 숨기기함
$("p").css({ display: "none" });
//  클릭하면 p태그가 보임
$(".show-btn").click(function () {
  $("p").css({ display: "block" });
});
//  클릭하면 p태그가 숨겨짐
$(".hide-btn").click(function () {
  $("p").css({ display: "none" });
});
