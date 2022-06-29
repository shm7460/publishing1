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



# 비디오 백그라운드를 활용한 랜딩페이지

```css
<div class="video-frame">
        <video
          src="images/video-female.mp4"
          autoplay
          muted
          loop
          poster="images/placeholder-female.jpg"
        ></video>
      </div>
```

→ autoplay: 자동재생 / muted: 음소거 / loop:무한반복 / poster:이미지

poster는 비디오가 로딩에 문제가 있어서 보여지지 않을때 대신하여 이미지를 보여주는 역할

픽사베이 무료 동영상: https://pixabay.com/ko/videos/ 

```css
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
```

→ css에서 구글폰트 import 해주기

```css
.video-frame video {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
```

→ 여기서  min-width와 min-height의 의미는 영상이 작더라도 가득채우라는 뜻으로 해석

 z-index는 position: relative, absolute, fixed가 없으면 작동을 못함

```css
.heading p {
  font-size: 1.2em;
}
```

→ em은 상대적 사이즈이다. 기본 폰트 사이즈는16px이다 

1.2em은 20%정도 커진거닌깐 18px정도 될수있다.

```css
animation-fill-mode: both;
```

 → 애니메이션 효과가 0에서 100으로 했으면 다시 0으로 스탠 바이 하지마라라는 뜻

```css
.trigger {
  position: absolute;
  top: 50px;
  right: 50px;
  border: 1px solid white;
  width: 40px;
  height: 20px;
}
.trigger span {
  position: absolute;
}
```

 →  .trigger에게 position: absolute가 적용되어 있기때문에 span(자식요소)을 위해서 

다시  position: relative을 할 필요가 없다 이미 position: absolute를 했기때문에  relative가 포함되어있다

 → **position: absolute가 적용이되면** line 요소든 block요소든 **inline-block**으로 변경되어서 크기값을 가질수있다 (inline-block는 콘텐츠 양만큼의 너비만 가지고 있는다 그래서 width를 줘야됨)

```css
.gnb a {
  display: block;
  padding: 10px;
  color: white;
  font-size: 60px;
  font-family: "Raleway", sans-serif;
  transition: 0.3s;
  animation: gnb 0.5s linear;
  /* 최초에는 안보이는 상태야 된다 */
  opacity: 0;
  /* 다시 애니메이션 효과가 0%으롣 돌아가지 않게 해줌 */
  animation-fill-mode: both;
}
```

 → 여기서 중요한 효과 animation-fill , opacity: 0

```css
.video-frame:before {
  position: absolute;
  content: "";
  background: linear-gradient(-135deg, tomato, transparent);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
```

 → 비디오 위에 그라데이션 주기

```css
<audio src="images/piano-bgm.mp3" autoplay loop controls></audio>
```

 → audio태그로 오디오 소리넣기

 → autoplay loop controls : 자동재생 무한반복 소리제어



# 로그인 화면 UI 디자인

```html
<head>
<link rel="icon" href="images/favicon.png" />
</head>
```

 → 홈페이지 이름옆에 아이콘넣기

```css
section {
  /* header의 높이를 빼주고 100vh 해줘야 스크롤이 안생김 */
  height: calc(100vh - 60px);
}
```

→ calc() : 사칙연산자가능

**nth-child()와 nth-of-type()**

```html
<div class="login-type">
    <h1>로그인</h1>
    <a class="btn" href="#">휴대폰 번호로 로그인</a>
    <span class="or-text">또는</span>
    <a class="btn" href="#">이메일로 로그인</a>
    <a class="btn" href="#">네이버로 로그인</a>
    <a class="btn" href="#">페이스북으로 로그인</a>
    <a class="btn" href="#">라인으로 로그인</a>
</div>
```

```css
.btn:nth-child(2) {
  background-color: white;
}
```

→ .btn을 선택해서 nth-child(1)했지만 적용이 안된다. 왜냐하면 **1번은 h1태그가 되기때문에** 2번으로 적용시켜야지 .btn클래스에 적용됨

```css
.btn:nth-of-type(1) {
  background-color: white;
}
```

→ 그래서 태그도 체크하는 nth-of-type()를 해주면 원하는 태그로 순서대로 적용시킬수 있다

```css
background: white url(images/logo-mobile.png) no-repeat center left 13px;
```

```css
background-color: white;
background-image: url(images/logo-mobile.png);
background-repeat: no-repeat;
background-position: center left 13PX;  //13px 떨어져 왼쪽에 위치한다는뜻 
```

→ 둘다 같은코드임 한줄이냐 여러줄이냐 차이

대신에 한줄로 background를 넣을때는 **배경색도 같이 앞에** 넣어줘야된다 아니면 덮어져서 안보임



```html
<input type="checkbox" id="chk" />
	<label for="chk"> 로그인 상태 유지 </label>
```

→ 굳이 체크박스를 클릭하지않아도 글자를 클릭해도 체크가된다.**input의 id와 label의 for를 연결 해줘야된다** 

 **before, after**

```css
.or-text:before {
  position: absolute;
  content: "";
  background-color: lightgrey;
  height: 1px;
  width: 45%;
}
```

→ before, after은 inline요소이다 대신에 position이 들어가면 inline-block으로 바뀌어서 크기값을 가질수있다



# Netflix FAQ 어코디언 

```html
<head>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="custom.js"></script>
</head>
```

→ jquery가 먼저오고 js파일이 나중에 있어야작동됨



**js를 scr로 script 하는 방법 (head/body)**

body안에 `<script src="custom.js"></script>` 를 해주면 

js파일에 `$("").click(function () {});`html안에 js 넣는 방식으로 작성하면되지만

head안에 `<script src="custom.js"></script>` 를 해주면 

js파일에 `$(function () {$("").click(function () {});});` 작성해야된다 여기서 

`$(function(){ })`의 의미는 documentready 라는 뜻이다 html파일을 먼저일고 js를 실행 하겠다는 의미이다



**slideUp**

```js
$(function () {
  $(".accordion .title").click(function () {
    $(this).siblings(".accordion .content").slideUp();   //1번 
    $(this).next().stop().slideToggle();        //2번
  });
});
```

→ 1번은 클릭한곳의 형제요소인 컨텐츠만 슬라이드접겠다는 의미이고 2번은 클릭한 요소의 다음인 컨텐츠를 슬라이드 토글로 내리겠다 의미 그래서 1번먼저 작성을해줘야 작동인된다

→ 1번은 나중에 작성하면 2번에서 작동을 할려고해도 1번이 작동을 못하게 만든다 

`.slideToggle("fast")` : 괄호안에 fast, slow, 1000(1초) 등 입력해서 동작빠르기를 설정할수있다



**before,after**는 **inline요소**라서 **transform**이되지 않는다 그래서 display로 inline-block이나 block을 해줘야 적용이된다

```css
button:after {
  content: "\e93f";
  font-family: xeicon;
  font-size: 30px;
  display: inline-block;
  transform: translateY(5px);
}
```



# 밀리의 서재 (FAQ)

```js
$(function () {
  //   $(".accordion-item .content").eq(0).show();
  $(".accordion-item .title").click(function () {
    $(this).next().stop().slideToggle(300);
    $(this).toggleClass("active");
  });
  $(".accordion-item .content").click(function () {
    $(this).stop().slideUp(300);
  });
});
```



# modal

 **jquery**

```js
$(".notice").click(function () {
        $(".modal").fadeIn();
      });
      $(".btn-guide").click(function () {
        $(".modal").fadeOut();
 });
```

→ jquery로fade로 효과주기

```js
 $(".notice").click(function () {
        $(".modal").addClass("active");
      });
      $(".btn-close").click(function () {
        $(".modal").removeClass("active");
  });
```

→ jquery로 class 추가로 효과주기



 **javascriprt**

```js
const modal = document.getElementById("modal-notice");
      function openModal() {
        modal.classList.add("active");
      }
      function closeModal() {
        modal.classList.remove("active");
 }
```

```html
<a onclick="openModal()" class="notice" href="#">
    Open Fade-In Modal with jQuery
</a>
<a onclick="closeModal()" class="btn-guide" href="#">
    Open Guide
</a>
```

→ javascriprt로 작성하고 html에서 onclick() 넣어주기



**:target 가상클래스 사용하기**

```html
<a class="notice" href="#modal-notice">
    Open Fade-In Modal with jQuery
</a>
<div id="modal-notice" class="modal">
</div>
```

```css
.modal:target {
  display: block;
}
```

→  href의 #다음에 오는 이름이랑 div의 id이름이랑 같으면 서로 연결이된다 

→ 짝궁이 된걸 실행시켜주는게 :target 이다, a태그를 눌렀을때 연결된 div에게 css가 적용이된다 



# Gradient Text

```css
h1 {
  background: linear-gradient(to right, tomato, pink);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
div {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  /* 배경의 범위를 어디까지 할지 정함 */
  background-clip: border-box;
  background-color: tomato;
}
```

→ 텍스트에 그라디언트 넣기 



# 검색창 모달

- XEICON: https://xpressengine.github.io/XEIcon/index.html

- input은 before after을 가질수없다

```css
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
```

→ input안에 x버튼 없애는 방법

```css
input[type="search"]:focus::placeholder {
  opacity: 0;
}
```

→ focus될때 input안에 글자 사라지게 하기 

```js
$("input[type=search").focus(function () {
        $(this).parents().next().css("display", "block");
 });
      $("input[type=search").blur(function () {
        $(this).parents().next().css("display", "none");
 });
```

→ 마우스가 해제된다: blur  /  컨트롤이 활성화됨 : focus



#  details와 summary로 만드는 어코디언

```css
details[open] summary {
  font-weight: bold;
}
details[open] summary:after {
  transform: rotateX(180deg);
}
```

→  details을 클릭하면 open이라는 클래스가 자동으로 생성됨 그래서 summary가 오픈됨



# 탭 메뉴 콘텐츠

**:target 가상클래스를 이용해서 탭메뉴 만들기**

```html
<a href="#tab1">
  london
</a>
-------------------------------------a태그의 #tab1과 id의 tab1이 연결됨----------------------
<div id="tab1" class="tab">
    <h2>london</h2>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
    non quas, mollitia assumenda tenetur sit necessitatibus nisi, ab
    fugiat sed expedita vitae obcaecati adipisci, minus natus impedit
    aspernatur aliquid.
    </p>
    <img src="images/city-01.jpg" alt="" />
</div>
```



```css
.tab:target {
  opacity: 1;
  visibility: visible;
}
```

→position으로 겹쳐진 내용들이 눈으로 봤을때는 보이지않지만 실제로는 겹쳐져 있어 마지막 내용이 젤위에 있다

그래서  opacity와visibility을 둘다 사용해야 클릭했을때 원하는 부분만 보일수 있다













