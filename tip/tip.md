# scrolling

scrolling파일

**한 페이지 안에서 지정된 위치로 점프하여 스크롤 하기**

`<a href="#앵커이름"></a>`     ,    `<태그 id="앵커이름"></태그>`

→ a태그의 href="#앵커이름"  그리고 찾아갈 곳 태그의 id="앵커이름"

→ a태그의 href 속성은 반드시 #으로 시작해야됨 #의미는 현재문서를 의미함(#part1은 현재문서에서 part1이라는 이름을 가진 id를 찾는다는 의미이다)



`<a href="링크주소" target="탭구분" title="툴팁"> </a>`

→ 탭구분: _blank(새탭으로 보이기), _self(현재 탭에서 보이기,기본값)

→ 툽팁: 마우스오버 했을때 보일 텍스트 표시



```html
<a class="btn-gototop" href="#">Go to top</a>
```

→ #: #샵 자체가 현재문서의 상단을 의미한다



**부드럽게 스크롤하기**

```js
<!-- Smooth Scroll 플러그인 활용 -->
<script>
    $("header a, .btn-gototop").click(function (e) {
        $.scrollTo(this.hash || 0, 900);
        e.preventDefault();
    });
</script>
```

→ jquery.scrollTo.min.js 플러그인 활용해서 스크롤 만들기

``` css
html {
	scroll-behavior: smooth;
}
```

→ 오직 css로 만들수도 있다 



# iframe

iframe파일

body안에 내가원하는 html파일을 추가한다

```html
<body>
    <iframe src="test.html" frameborder="0"></iframe>
</body>
```

```css
<a href="https://naver.com/" target="_parent">네이버 홈페이지 바로가기</a>
```

→ target="_parent" 하면 부모요소크기에서 열린다



# 확장선택자

hammenu파일

**input과 checked를 활용한 확장선택자**

```css
ul + p {color: red;}   //인접선택자 + (위에서 밑으로 선택할수있다)
ul ~ p {color: blue;}  //형제선택자 ~
```

```css
/* 형제요소라서 ~를 사용한다 */
input:checked ~ .sidebar {
left: 0;
}
/* 인접해있기때문에 +를 사용한다 */
input:checked + label {
	left: 260px;
}
```



# onclick

onclick 파일

**inline javascript 구문**

```html
<body>
    <!-- inline js 구문 -->
    <section
        class="welcome"
        onclick="location.href='https://www.apple.com/kr/iphone-13/'">
            <div class="heading">
            <h3>iphone 13</h3>
            <a href="https://www.apple.com/kr/iphone-13/">
                Encounter with the future
            </a>
    		</div>
    </section>
</body>
```

 → `onclick="location.href='주소' "` 여기에 링크주소를 넣으면 그 태그는 어느곳을 누르던 onclick이된다

→ 유저가 굳이 어렵게 a태그를 클릭해 링크를 들어가지 않아도된다 (현재창에서 열림)

→  유저입장에서 생각해서 어느곳을 눌러도 링크가 선택되게함

```html
<section
    class="welcome"
    onclick="window.open('https://www.apple.com/kr/iphone-13/')"
</section>
```

→  `onclick="window.open('주소')"`  이렇게하면 새탭에서 html이 열린다 



**inline js HTML에 적용하기**


- 현재 탭

```html
<div onclick="location.href='http://www.daum.net'">DIV</div>
```

- 새로운 탭

```html
<div onclick="window.open('http://www.daum.net','_blank')">DIV</div>
```

```html
<a href="javascript:history.back()">뒤로 이동</a>  
<a href="javascript:history.forward()">앞으로 이동</a>
<button onclick="javascript:history.back()">뒤로 이동</button>
<a href="javascript:location.reload()">새로고침</a>
<a href="javascript:window.close()">창닫기</a>
<button onclick="javascript:location.href='http://www.daum.net', '_blank'">
    다음사이트 바로가기
</button>
```

→ a태그는 href가 있기때문에 바로 js 적어주면된다 button은 onclick해줘야된다



# display 속성

**inline**

크기값을 지정못함, 한줄에 여러개 배치됨, 상하 마짐 못가짐, 기본 너비값은 컨텐츠의 너비값임

→ span, a, small, em, b, br, audio, video, s, u, mark, q, strong, sup, sub, i, big, del, label

**block**

크기값을 지정할 수 있음, 한줄에 한개만 배치, 상하좌우마진 모두 가짐, 기본 너비값은 100%

→ div, ul, ol, li, h, hr, form, dl, dt, dd, p, table, header, article, footer, section, nav, details, summury, center,

**inline block**

크기값을 지정할 수 있음, 한줄에 여러개 배치, 상하좌우마진 모두 가짐, 기본 너비값은 컨텐츠의 너비값

→ img, input, button, fontawesome icon



- 어떤 요소이건 **position: absolute 또는 fixed**가 적용되면 **인라인블록**으로 변함.

- **before after**는 기본적으로 인라인요소



# font size

fontsize 파일

**em: parent element기준 / rem: root html기준**

```css
.box-em {
	font-size: 20px;
}
.box-em p {
    font-size: 2em;   //2em = 20px * 2 = 40px 
	line-height: 1.5em;  //30px이다 
}
```

→ line-height에서 em을 많이 사용함

```css
html {
        font-size: 20px;
      }
.box-rem {
        font-size: 40px;
      }
.box-rem p {
        font-size: 0.8rem;  // 16px = 0.8rem   계살할때(16/20=0.8)
      }
```

→ rem = 원하는 픽셀 / html폰트사이즈



# inherit

부모요소의 속성을 자식요소가 상속받는다

div는 너비가 100%이다 그래서 보통 height를 할때 inherit한다



# CSS calc()

`+  - * /`

```css
width: calc(100% - 40px);
width: calc(800px / 3);
width: calc(1000px - calc(100% - 40px));  //중첩도 가능함
```



#  var(-- 변수명)

**--변수명 : 값;**

```css
.parent{
	--pwidth: 300px;
	width: var(--pwidth);    //너비는 300px이다
}
```

**변수 한곳에 모아두기**

```css
:root{
	--primary: royalblue;
    --secondary: black;
    --positive: yellowgreen;
}

.btn1{
    background-color: var(--primry)
}
```



# Modal

modal 파일

 **overflow**

```css
.modal-content {
  border-radius: 15px;
  /* 이미지때매 넘친 부분 끊어준다 */
  overflow: hidden;
}
```

→ div에 border-radius을 했지만 자식요소에 이미지를 넣으면 안먹힌다 그럴때 overflow하면 넘친 부분을 끊어줌

**pointer-events**

```css
.overlay {
  opacity: 0;
  transition: 0.3s;
  /* 존재하지만 마우스클릭을 받지않겠다  */
  pointer-events: none;
  /* 이렇게해도 됨
  visibility: hidden; */
}
.overlay.active {
  opacity: 1;
  /* overlay에 active클래스가 추가되면 포인터인벤트가 작동되게한다 */
  pointer-events: all;
  /* visibility: visible; */
}
```

→ pointer-events를 사용하면 마우스클릭을 받지않겠다는 뜻임 대신해서 visibility사용해도됨

**flex-basis**

```css
.photo {
    /*photo에 background 이미지가 flex로 먼저 자리잡았기 때문에 flex-basis로 값을준다 */
    flex-basis: 250px;
}
```

**transform**

```css
/* transform은 중복해서 사용하면 안됨 */
transform: translate(-50%, -50%) scale(0.7);
```



# 스크롤 후 헤더 디자인 변경

scrolling 파일 header.html

```CSS
header.active .lnb-inner {
  /* display: none; */
  height: 0;
  overflow: hidden;
}
```

→ 높이 0을주고 overflow로 숨겨서 display:none 대신해서 사용할수있다

```js
if ($(window).scrollTop() > 50) {     }
```

→ 조건 : 마우스가 스크롤된상태가 50보다크다면

```JS
// Header active class
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $("header, .btn-top").addClass("active");
    } else {
        $("header, .btn-top").removeClass("active");
    }
});
```



# Slick Slider 사용법 

slider 파일

슬릭 슬라이더 플러그https://kenwheeler.github.io/slick/

**사용방법**

get it now에서 다운로드해서 같은 작업장소에 붙여넣는다 - usage에서 html 구조를 복사해온다- demos에서 script를 가져와 복사한다

```html
<head>
 <!-- jquery cdn -->
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
 <!-- Slick -->
    <link rel="stylesheet" href="slick/slick.css" />
    <link rel="stylesheet" href="slick/slick-theme.css" />
    <script src="slick/slick.js"></script>
 <!-- style -->
    <link rel="stylesheet" href="style.css" />
</head>
```

```html
<body>
<div class="myslider">
      <div>Slid Content #01</div>
      <div>Slid Content #02</div>
      <div>Slid Content #03</div>
      <div>Slid Content #04</div>
      <div>Slid Content #05</div>
      <div>Slid Content #06</div>
      <div>Slid Content #07</div>
      <div>Slid Content #08</div>
      <div>Slid Content #09</div>
    </div>   
</body>
```

```html
<body>
<script>
      $(".myslider").slick({
        // 보여지는 갯수 스클롤수
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // 자동재생
        autoplay: true,
        autoplaySpeed: 2000,
        // 패이드
        speed: 500,
        fade: false,
        cssEase: "linear",
        // 도트
        dots: true,
      });
    </script>
 </body>
```



# 스크롤하면 시작되는 애니메이션 

wow 파일

https://wowjs.uk/

**사용방법**

wow.min.js를 다운해서 같으 폴더에 넣기- script에 `new WOW().init();`입력하기 - class이름에 wow 추가하기 -내가만든 @keyframe이 잘 적용되는지 확인하기

```html
<head>
    <script src="js/wow.min.js"></script>
</head>

<body>
    <div class="wow">
        Content to Reveal Here
    </div>
    
     <script>
        new WOW().init();
    </script>
</body>
```

**옵션**

```html
<body>
   <script>
      wow = new WOW({
        boxClass: "wow", // default  클래스이름설정
        animateClass: "animated", // default
        offset: 0, // default  어느정도 내려갔을때 작동하겠느냐
        mobile: true, // default  모바일에서도 작동하겠냐
        live: true, // default
      });
      wow.init();
    </script>
</body>
```

**옵션**

```html
<section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
</section>

<section class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10">
</section>
```

data-wow-duration: 애니메이션 지속 시간 변경
data-wow-delay: 애니메이션 시작 전 지연
data-wow-offset: 애니메이션 시작 거리(브라우저 하단 관련)
data-wow-iteration: 애니메이션 횟수 반복**



**aos파일**

https://michalsnik.github.io/aos/

**사용방법**

head에 cdn 링크해주기 (css,js둘다) - script에  `AOS.init();`해주기 -원하는 효과 html 복사 하기

```html
<div class="parent">
      <div data-aos="fade-right" data-aos-duration="1000">left</div>
      <div data-aos="fade-left" data-aos-duration="1000">right</div>
</div>
```

  **AOS.js 옵션**
      애니메이션을 원하는 요소에 아래 속성을 추가하면됨
      애니메이션 속도 : data-aos-duration="3000"
      애니메이션 이징 : data-aos-easing="linear"
      애니메이션 시작위치 : data-aos-offset="300"
      애니메이션 지연시간 : data-aos-delay="300"



















