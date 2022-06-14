# 01 탭 메뉴 콘텐츠

파일경로: tabmenu/ tabmenu1.html, style1.css

```js
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
```

→ jqery html head에다가 script 해주기

```js
<script>
    $(".testimonial-pic img").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".testimnial .content").removeClass("active");
        // # + 이미지를클릭할때 그이미지의 data-alt 값을 더한다는 뜻이고 그러면 content의 id값이 만들어진다
        $("#" + $(this).attr("data-alt")).addClass("active");
});
</script>
```

→ *tab1 == $(this).attr('data-alt')*

 1번이미지을 를 눌렀다면 $( this).attr("data-alt") → tab1 가 나온다

받아온 tab1을 #과 합쳐줘서 #tab생성 → "#" +$( this).attr("data-alt") 



## - data-alt 사용자 지정 속성 

파일경로: tabmenu/ tabmenu2.html, style2.css

```css
.heading input[type="text"]::placeholder {
  font-style: italic;
  transition: 0.3s;
}
.heading input[type="text"]:focus::placeholder {
  opacity: 0;
}
```

→ visibility: hidden`: 크기값은 있고 사라짐 , `display:none`: 크기값도 같이 사라짐

`      opacity: 0`는 사라진것은 아니지만 눈에 안보일뿐이다

visibility와display는 `transition`효과는 줄수없다 대신에 `opacity: 0`을 적용하면 가능하다



```css
/* hover효과를 했을때 border로인해 덜컹 거리는 것을  없애기 위해 */
border-top: 2px solid transparent;
```

→ hover 효과에서 border를 한쪽에만 주었을때 순간 변화 되면서 덜컹거리는 느낌을 없애기위해서

효과가 적용되는 border위치에 똑같이 보이지않는 투명한 border를 주면 덜컹거리지않는다

transparent :투명색이다



```css
.tabs div img {
  /* img 다음으로 오는 아이들은 가로로 옆으로 온다 */
  float: left;
  margin-right: 20px;
}

.tabs div p {
  /* 문단이 튀어나오지않게 정리해줌 */
  overflow: hidden;
}
  /* background-color: white; */
  /* background속성은 한줄에 넣어줘야한다 */
  /* center:수직 중앙 left 5px: 5px떨어져서 수평 왼쪽정렬해라  */
  background: white url("images/search-icon.png") no-repeat center left 5px;
```

→ `float: left` 하면 모든 요소들이 가로로 정렬된다 

→ p 태그의 문단의 왼쪽 세로가 넘치지않길 원하면  `overflow: hidden`; 해주면 된다

→  background속성은 한줄에 넣어줘야한다 (색포함)



```JS
$(".btn li").click(function () {
    $(this).addClass("active");
    // 눌린 this기준으로 형제들은 class를 지워준다
    $(this).siblings("li").removeClass("active");

    // 눌린 this속성중에서 data-alt를 가지고 온다
    const tab = $(this).attr("data-alt");
    // tabs밑에 div들에게 먼저 class를 제거먼저한다 그리고 눌린 div에게만 클래스를 준다
    $(".tabs div").removeClass("active"); //코드순서1번
    // # + tab하면 id 이름이 나온다
    $("#" + tab).addClass("active"); //코드순서2번
});
```

→ 1번 2번 순서를 지켜야 작동됨







# 02 js의 변수(var)와 조건문(if)

파일경로: javascript/ basic.html, style.css

```html
<body>
    <div class="container">
      <h1>javascript var, val(),if</h1>
      <div class="login">
        <h2>20세 이상 성인인증 체크 제이쿼리 if 조건문</h2>
        <input id="id" type="text" placeholder="나이를 숫자로 입력" />
        <button>성인인증</button>
      </div>
    </div>

    <script>
      $(".login button").click(function () {
        const num = $("#id").val();
        if (num == "") {
          alert("나이를 입력하세요.");
        } else if (num < 20) {
          alert("미성년자 입니다");
        } else if (num >= 20) {
          alert("성인입니다");
        } else {
          alert("숫자로 입력해주세요");
        }
      });
    </script>
</body>
```



## - 별점 주기만들기

파일경로: javascript/ star.html, star.css

**float 의 속성 사용법** 

**none** (기본값) : 정렬하지 않는다.

**left** : 왼쪽으로 정렬한다.

**right**: 오른쪽으로 정렬한다.

```html
<body>
    <div class="star-rating">
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="print">별점 주실거죠?</div>
    </div>
    
    <script>
      $(".stars i").click(function () {
        // 사용자가 많은 1태그중에 무엇을 누르는지 모르기때문에 this라고 해준다
        $(this).addClass("active");
        // 누른 this기준으로 전에 것들 모두 클래스를 준다는뜻
        $(this).prevAll().addClass("active");
        //  누른 this기준으로 앞에 것들 모두 클래스를 없앤다는 뜻
        $(this).nextAll().removeClass("active");

        // index는 순서를 찾아줌(0,1,2,3...)
        const num = $(this).index();
        const starRate = num + 1;
        // $(".print").text(starRate);

        // img태그부분은 인식하기 위해서는 html 메서드를 사용해야된다
        if (starRate == 1) {
          $(".print").html('<img src="images/star-lv1.png">' + "별로에요");
        } else if (starRate == 2) {
          $(".print").html("<img src = 'images/star-lv2.png'>" + "그저 그래요");
        } else if (starRate == 3) {
          $(".print").html('<img src="images/star-lv2.png">' + "보통 이에요");
        } else if (starRate == 4) {
          $(".print").html("<img src = 'images/star-lv3.png'>" + "맘에 들어요");
        } else {
          $(".print").html("<img src = 'images/star-lv4.png'>" + "아주 좋아요");
        }
      });
    </script>
  </body>
```



# 03 마우스 올리면 배경이미지 변경하기 

파일경로: mouse/ mouse.html, mouse.css

```js
<script>
      $(".navi li").mouseenter(function () {
        // data-image는 속성이기때문에 ""해줘야함
        const changeImage = $(this).attr("data-image");
        $(".photo").css({
          // 배경이미지를 css로 변경할때
          "background-image": "url(" + changeImage + ")",
        });
      });

      $(".navi li").mouseleave(function () {
        $(".photo").css({
          "background-image": "",
        });
      });
</script>
```



# 04 쇼핑몰 아이템 UI 호버 이펙트

파일경로: uihover/ shopping.html, shopping.css

```css
.detail {
  position: absolute;
  width: 100%;
  height: 250px;
```

→  position:absolute가 들어가면 dispaly속성이 inlin-block으로 바뀜 그래서 너비를 줘야됨

```js
$(".size span, .color span").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".like i").click(function () {
    $(this).toggleClass("active");
});
```

→ addClass removeClass / siblings / toggleClass



# 05 어코디언 콘텐츠 슬라이드

파일경로: slider/index.html, style1.css

slideUp(), slideDown(), fadeIn(), fadeOut()은 일반적으로 stop()와 함께 사용한다

```css
/*>는 content 바로밑에 div를 선택한다  */
.content > div {
}
```

```js
$(".title").click(function () {
    $(this).addClass("active");
    $(this).siblings(".title").removeClass("active");
    // .stop()는 애니메이션 동작을 끊어줘서 여러번 반복안하게 해줌
    $(this).siblings(".desc").stop().slideUp(); //1번 형제들을 먼저 위로 접기
    // .next는 바로옆에 아이를 선택함
    $(this).next(".desc").stop().slideDown(); //2번 선택한 .desc만 내리기

    const dataImage = $(this).attr("data-image");
    $(".image img").attr("src", dataImage);
});
```

→ .stop / .next 





















