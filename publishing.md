

# HTML핵심 태그 사용법(문단, 텍스트,서식)

## **제목표시하기 h1~h6**

```html
<h1>무의미한 한글 텍스트 생성기입니다.</h1>
<h2>무의미한 한글 텍스트 생성기입니다.</h2>
<h3>무의미한 한글 텍스트 생성기입니다.</h3>
<h4>무의미한 한글 텍스트 생성기입니다.</h4>
<h5>무의미한 한글 텍스트 생성기입니다.</h5>
<h6>무의미한 한글 텍스트 생성기입니다.</h6>
```

## **문단,줄 바꿈 p,br**

```html
<p>
  Lorem, ipsum<br/>
  dolor sit amet consectetur adipisicing elit. Quos iusto inventore,
</p>
```

## **글자 굵게 표시하기 b**

```html
<p>
    <b>Lorem, ipsum dolor sit amet </b>onsectetur adipisicing elit. Iusto
    consequatur vitae explicabo.
</p>
```

## **글자 기울림 표시하기 em**

```html
<em>asperiores.</em>
```

## **글자 밑줄 표시하기 u**

```html
<u>alias accusantium? Voluptatem.</u>
```

## **글자 취소선 표시하기 s**

```html
<s>officia hic saepe nam ex ut</s>
```

## **큰 글자 표시, 작은 글자 표시 big,small** (기본 글자크기에서 조금작아지고 조금커짐)

```html
<p>
    Lorem<big>dolor sit amet </big> consectetur adipisicing elit.
    <small>Ipsum nostrum</small> esse sint, cupiditate velit deserunt 
</p>
```

## **위 첨자, 아래 첨자 sup,sub**

```html
<p>CO<sub>2</sub></p>
<p>12<sup>th</sup></p>
```

## **형광펜 배경색 글자 mark**

```html
<mark>Veritatis eaque laudantium voluptates,</mark> aliquid aperiam
```

## **수평선 넣기 hr**

```html
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae
    libero autem aperiam dignissimos quaerat nisi reiciendis. Animi
</p>
<hr />
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque
    dicta officia ipsam dignissimos reprehenderit molestiae magni labore? </p>
```



# 목록만들기

## 순서가 있는 목록 ol>li

```html
<ol>
      <li>list</li>
      <li>list</li>
</ol>
```

## 순서가 없는 목록 ul>li

```html
<ul>
    <li>list</li>
    <li>list</li>
</ul>
```

## ol태그와 ul태그 중첩하기

```html
<ol>
    <li>list1</li>
    <li>
      list2
      <ul>
          <li>one</li>
          <li>two</li>
     </ul>
   </li>
   <li>list3</li>
</ol>
```

# 링크, 이미지

## 외부 링크나 파일 링크하기 a

```html
<a
      href="https://www.naver.com/"
      target="_blank"             //새창이 열리도록해줌
      title="네이버사이트로 이동"    //마우스 호버했을때 텍스트가 뜸
>
      naver
</a>
```

## 이미지 html문서에 넣기 img

```html
<img src="imges/naver_logo.png" alt="naver"/> //alt는 사진이없을때 대체하는 텍스트
```

# CSS 핵심이론

## CSS링크하기 - 내부CSS

```html
 <head>
   <style></style>
 <head/>
```

## CSS링크하기 - 외부CSS

```html
 <head>
   <link rel="stylesheet" href="style.css" />
 <head/>
```

## 기본문법

```css
body{
 color: navy;
}
```

- selector { property : value ;  }

## 선택자

**태그 선택자**

```css
p{
 color:red;
}
```

**클래스 선택자**

```css
.center{
  color:red;
}
```

**아이디 선택자**

```css
#center{
  color:red;
}
```

**태그와 함께 쓰는 선택자**

```css
p.center{
	color:red;
}
```

**그룹 선택자**

```css
h1,p{
	color:red;
}
```

**하위 선택자**  상위태그 하위태그{하위태그에세 적용됨}

```css
p span{
  color:red;
}
```

**전체 선택자**

```css
*{
  color:red;
}
```

**css 주석**

```css
/*  color:red; */
```

## CSS 적용 우선순위

`!importantSWtyle > InlineStyle > ID Selector Style > Class Selector Style > Tag Selector Style`

# CSS 서식관련 속성

## 텍스트 스타일

- font-size : 텍스트의 크기를 지정  (글자 크기는 기본적으로 15px를 많이 사용함)
- font-weight : 글꼴 두께를 지정
- line-height : 줄간격을 지정
- font-family : 글꼴을 지정
- font-style : 문자스타일(기울림체)
- color : 글꼴 색을 지정
- text-decoration : 텍스트 줄 표시
- text-transform : 텍스트를 대문자 및 소문자로 변환
- text-align : 문자정열
- text-shadow : 텍스트의 그림자

## 목록 스타일

**ul의 list-style 종류**

disc,circle,square

**ol의 list-style 종류**

decimal,decimal-leading-zero,lower-roman,upper-roman,lower-alpha,upper-alpha

**before 이라는 가상 클래스**

```css
.menu li:before{
      content:"♥";
}
```

- before을 이용해서 원하는 내용을 찾아넣어 리스트 스타일을 만들수도 있다.

# css 선택자

css 자식선택자 : >  (바로밑에 자식만)

css자손 선택자 : 스펭이스  ()

```html
<div class="parent">
    <div class="child">    // parent의 자식이면서 자손
       <div></div>         //parent의 자손
    </div>
</div>
```

# 상세디자인을 위한 CSS 박스모델

## border

- border-style : solid, dashed,dotted,double
- border-width : px
- border -color : color
- border: 1px solid red;  (한번에 테두리 속성 할당)

## border-radius

- border-radius: 50px
- border-radius: 200px 0px

- border-radius: 200px 0px 50px 10px (시계방향으로 돌아감)

##  padding, margin, box-sizing

 **padding, margin**

- margin/padding : 10px (상하좌우)
- margin/padding : 10px 5px (상하 ,  좌우)
- margin/padding : 200px 0px 50px 10px (시계방향으로 돌아감)

**box-sizing: box-sizing**

- 패딩이나 보더등을 추가 하더라도 확장시키지 않고 **최초에 정한 너비 높이를 유지한다**

## box-shadow, text-shadow

**box-shadow**  : x축이동거리 y축이동거리 퍼짐정도 색상 ;

- inset : 안쪽그림자

- offset-x : 수평 그림자의 offset값

- offset-y :  수직 그림자의 offset값

- blur : 그림자 가장자리를 부드럽게 처리

- color : 그림자 색상

- 10px 10px 0px blue, 20px 20px 0px lightblue, 30px 30px 0px darkblue :그림자 중첩하기

```css
box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
box-shadow: 0 0 20px blue;       //내용가운데 부터 퍼짐
box-shadow: 10px 10px 0px blue;  //퍼짐 없음
box-shadow: inset 0px 0px 20px blue;  //안쪽 그림자가 생성됨
```

**text-shadow** 

- offset-x : 그림자의 수평 거리를 정함
- offset-y :  그림자의 수직 거리를 정함
- blur-radius : 흐림 정도를 정함
- color : 색상을 정함

```css
text-shadow: 0 0 20px #fff;
text-shadow: 5px 5px 0 blue, 10px 10px 0 lightblue;  //그림자 중첩
```

# inline요소, block요소, inline-block요소

**inline** 

- 한줄에 여러개 배치
- 기본 너비값은 컨테츠의 너비값
- 크기값X, 상하 마진X
- span, a, video,audio

**block**

- 한줄에 한개만 배치
- 기본 너비값은 100%
- 크기값O
- div, header, nav, footer, section, article. aside, p, ul, ol, li, td, form, h1~h6

**inline-block**

- 한줄에 여러개 배치
- 기본너비값은 컨테츠 너비값
- 크기값 O
- img, input, bbutton, fontawesome

# CSS로 HTML 가로 배치하기

## float, overflow

**float (수평정렬하기 단1px이라도 어긋나면 적용안됨)**

- float: left
- float: right
- margin: auto (block 요소만 가능)

 **overflow: hidden**  (float적용시켰을때 부모요소의 높이값을 줄때)

```css
.parent {
  background-color: orange;
  width: 600px;
  overflow: hidden;
}
.child {
  background-color: tomato;
  width: 200px;
  height: 300px;
  float: left;             //요소를 왼쪽으로 보냄
}
```

→  자식요소에게 `float: left;`을 주게되면 자식요소가 붕뜨기 떠버려 부모는 자식이 없다고 생각하고 높이값이 없어짐 

그래서 높이값을 따로 주거나 `overflow: hidden;`을 해줘야된다

 `overflow`를 해주면 자동으로 자식의 높이갚에 맞게 값설정한다

**text-align: center**  (inline 요소를 정렬할때)

````css
.parent {
  background-color: orange;
  width: 600px;
  overflow: hidden;
  text-align: center;
}
span {
  background-color: tomato;
  width: 200px;
  height: 300px;
}
````

→ inline 요소를 중앙 정렬 할때는 부모에게 `text-align: center;`을 사용해줘야한다

→ block 요소를 중앙정렬할때는 자기 자신에게 `margin: auto`를 해야된다.

## clear, inline-block

**clear (float를 상속받는것을 해제시킴)**

- clear: left
- clear: right
- clear: both (모든 float 상속을 해지)

# 시멘틱 태그로 CSS 레이아웃 설계하기

## 시멘틱 태그 사용

**.container > header , section , footer > article > div**

- .container : 가장상위의 컨테이너

- main : 문서의 주요 내용을 지정

- header : 로고,메뉴,로그,검색 헤더영역

- section : 주제별 콘텐츠 영역

- footer : 제작 정보 및 저작권 정보 표시

- article : 콘텐츠 내용 넣기 (더 세부적으로 할때는 자식요소로div넣기 )

- nav : 문서를 링크하는 탐색 영역

# position 속성 

## **relative : 부모요소   /   absolut : 자식요소**

```css
.parent {
  background-color: orange;
  width: 600px;
  height: 300px;
  position: relative;
}
.span {
  background-color: tomato;
  width: 200px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
```

**브라우저 크기에 관계없이 항상 수직수평 중앙 정렬하기**

```css
div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
}
```

**부모요소 밖으로 위치시키기**

```css
.parent {
  position: relative;
  background-color: orange;
  width: 600px;
  height: 300px;
}
.child {
  position: absolute;
  background-color: tomato;
  width: 100px;
  height: 100px;
  top: 100%;                //부모요소의 높이값의 100%를 의미함
  left: 100%;               //부모요소의 너비값의 100%를 의미함
}
```

→ 자식요소가 100%으로 위치를 움직이면 부모요소 밖으로 나간다

# CSS 필수 가상클래스

## 마우스 효과 hover,  transition

```css
a {
  color: black;
  text-decoration: none;
  transition: 0.5s;
}
a:hover {
  color: tomato;
  text-decoration: underline;
}
```

→ transition은 hover가 아닌곳에 넣어주어야됨 (마우스 오버와 마우가 빠질때 모두 적용됨)

## 순서를 만드는 가상클래스 (nth-child, nth-of-type)

**선택자:nth-child(숫자) {...}**          nth-of-type은 비슷하지만 태그를 체크해줌

```css
.box div {
  width: 100px;
  height: 100px;
  background-color: beige;
  margin: 10px;
}
.box div:nth-child(2) {
  background-color: blue;
  width: 100px;
  height: 100px;
}
```

## first-child, last-child

```css
.box div:first-child {
  background-color: blue;
  width: 100px;
  height: 100px;
}
```



# 제이쿼리(jQuery) 

**body태그안에 마지막에 jquery오픈소스 script 해주기**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <script src="js/jquery.js"></script>    <!-- 오픈소스를 먼저 링크해야됨 -->
    <script src="js/custom.js"></script>
  </body>
</html>
```

## - 기본 구문 만들기, 선택자

`$('선택자').함수(function(){`

​             `실행구문;`

`});`

실행구문: `$('선택자').메서드();`

```javascript
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
```

```html
 <a class="show-btn" href="#">보이기</a>
 <a class="hide-btn" href="#">감추기</a>
 <p>태그선택자 a를 클릭했습니다.</p>
```

**선택자 종류**

css 클래스 , css아이디 , css태그 , this

**필수 함수**

click , mouseenter , mouseleave

**필수 메서드** 

`효과 메서드:`

slideDown() , slideUp() , stop() , show() , hide() , toggle() , fadeIn() , fadeOut() 

`클래스 제어 메서드:`

addClass() , removeClass() , toggleClass() 

`요소탐색 메서드:`

children() , parent() , siblings() :형제 , find() :자손들 , next() :다음 , prev() :전

# 함수

## - click 함수

```js
//클릭하면 div가 보임
$(".show-btn").click(function () {
  $("div").show();
});
// 클릭하면 div가 숨겨짐
$(".hide-btn").click(function () {
  $("div").hide();
});
```

```html
<a class="show-btn" href="#">보이기</a>
<a class="hide-btn" href="#">감추기</a>
<div>box</div>
```

→ click함수 show()메서드, hid()메서드 활용

## - mouseenter , mouseleave함수

```js
//마우스를 올려두면 보여짐
$(".btn").mouseenter(function () {
  $("div").show();
});
//마우스가 떠나면 사라짐
$(".btn").mouseleave(function () {
  $("div").hide();
});
```

```html
<a class="btn" href="#">보이기/감추기</a>
<div>box</div>
```

→ mouseenter함수,mouseleave함수와  show()메서드, hid()메서드의 활용

# 효과 메서드

## - show() , hide() , toggle()

```js
// 클릭하면 보임
$(".show-btn").click(function () {
  $(".container div").show();
});
//클릭하면 숨김
$(".hide-btn").click(function () {
  $(".container div").hide();
});
//클릭하면 보이고 클릭하면 숨겨짐
$(".toggle-btn").click(function () {
  $(".container div").toggle();
});
```

```html
<div class="container">
      <a class="show-btn" href="#">보이기</a>
      <a class="hide-btn" href="#">감추기</a>
      <a class="toggle-btn" href="#">토글</a>
      <div>box</div>
</div>
```

## - slideDown, slideUp, slideToggle

```js
//클릭하면 슬라이드 다운됨
$(".show-btn").click(function () {
  $(".container div").slideDown();
});
//클릭하면 슬라이드 업됨
$(".hide-btn").click(function () {
  $(".container div").slideUp();
});
//클릭하면 슬라이드 업 다운 됨
$(".toggle-btn").click(function () {
  $(".container div").slideToggle();
});
```

## - fadeIn, fadeOut, fadeToggle

```js
//클릭하면 서서히 나타남
$(".show-btn").click(function () {
  $(".container div").fadeIn();
});
//클릭하면 서서히 사라짐
$(".hide-btn").click(function () {
  $(".container div").fadeOut();
});
//클릭하면 서서히 사라지고 서서히 나타남
$(".toggle-btn").click(function () {
  $(".container div").fadeToggle();
});
```

→ 메서드뒤에()안에는 지속시간을 의미한다 넣지않으면 기본값이 적용됨:  fadeIn(지속시간)

→ `.fadeIn("fast")` 이렇게 속도를 단어로 넣을땐 반드시 ''을사용해됨

```js
//0.5초간 서서히 보이게 하겠다
$(".show-btn").click(function () {
  $(".container div").fadeIn(500);
});
//느리게 서서히 사라지게 하겠다
$(".hide-btn").click(function () {
  $(".container div").fadeOut("slow");
});
```

→ `.fadeIn(500)` 지속시간은 숫자로 넣을때는 숫자만 넣는다  1000 -> 1초

# 클래스 제어 메서드

## - addClass, removeClass, toggleClass

```js
//클릭하면 active 클래스가 추가됨
$(".add-btn").click(function () {
  $(".container div").addClass("active");
});
//클릭하면 active 클래스가 제거됨
$(".remove-btn").click(function () {
  $(".container div").removeClass("active");
});
//클릭하면 active 클래스가 추가되고 제거됨
$(".toggle-btn").click(function () {
  $(".container div").toggleClass("active");
});
```

```css
.container .active {
  background-color: tomato;
}
```

→ addClass("active") 클래스를 추가하거나 지우는 메서드 괄호에는 . 점을 쓰면안된다

# 요소탐색 메서드

## - children

```js
//this는 .menu li이고 자기자신이라는 뜻

//.menu li에 마우스를 올리면 자식요소.sub-menu가 슬라이드 다운이된다
$(".menu li").mouseenter(function () {
  $(this).children(".sub-menu").stop().slideDown();
});
//.menu li에 마우스를 올리면 자식요소.sub-menu가 슬라이드 업된다
$(".menu li").mouseleave(function () {
  $(this).children(".sub-menu").stop().slideUp();
});
```

```html
<ul class="menu">
    <li>
        <a href="#">menu-1</a>
        <div class="sub-menu">
            <a href="#">sub-menu-1</a>
            <a href="#">sub-menu-2</a>
            <a href="#">sub-menu-3</a>
            <a href="#">sub-menu-4</a>
        </div>
     </li>
     <li>
         <a href="#">menu-2</a>
         <div class="sub-menu">
             <a href="#">sub-menu-1</a>
             <a href="#">sub-menu-2</a>
             <a href="#">sub-menu-3</a>
             <a href="#">sub-menu-4</a>
         </div>
     </li>
 </ul>
```

→ 효과메서드 `.stop()` 넣어주면 그전 행동을 삭제해버려서 버벅거리지않음

## - siblings

```js
$("span").click(function () {
  // 자신이 클릭될때는 active 클래스를 추가해라
  $(this).addClass("active");
  // 자신이 클릭될때 자신의 형제에게는 active클래스를 지워라
  $(this).siblings().removeClass("active");
});
```

```html
<div class="btn">
      <span>공지사항</span>
      <span>갤러리</span>
</div>
```

# 제작

## 01keyframe, animation

###  **- 원형 크기 변경 로딩 애니메이션 **   (animation-delay)

```css
.loading span {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: gray;
  /*loading 애니메이션을 1초동안 부드럽게 무한으로 실행한다 */
  animation: loading 1s linear infinite;
}

.loading span:nth-child(1) {
  animation-delay: 0s;
  background-color: tomato;
}
/* 0.2초 대기하다가 실행함 */
.loading span:nth-child(2) {
  animation-delay: 0.2s;
  background-color: orange;
}
/* 0.4초 대기하다가 실행함 */
.loading span:nth-child(3) {
  animation-delay: 0.4s;
  background-color: royalblue;
}

@keyframes loading {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
```

→ keyframes으로 로링이라는 애니메이션을 만들어주고 각각 span마다 **animation-delay**을 줘서 로딩효과를줌

``` html
<div class="loading">
    <span></span>
    <span></span>
    <span></span>
 </div>
```

### **- 사각형 좌표 변경 로딩 애니메이션 **  (calc)

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loading {
  position: relative;
  height: 100px;
  width: 100px;
  /* border: 1px solid palevioletred; */
}
.loading span {
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 3px;
  background-color: tomato;
  animation: loading 1.5s infinite;
}
.loading span:nth-child(1) {
  background-color: tomato;
}
.loading span:nth-child(1) {
  animation-delay: 0.8s;
}

@keyframes loading {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    /* 자기자신의 너비 값을 빼준값만큼 100%로 움직임 */
    left: calc(100%-30px);
    background-color: yellowgreen;
  }
  50% {
    top: calc(100% - 30px);
    left: calc(100% - 30px);
    background-color: orange;
  }
  75% {
    top: calc(100% - 30px);
    left: 0;
    background-color: thistle;
  }
  100% {
    top: 0;
    left: 0;
  }
}
```

→ `calc(100%-30px)` 을 사용해서 부모안에서 움직이도록, 자기자신의 너비 값을 빼준값만큼 100%로 움직였다

``` html
<div class="loading">
      <span></span>
      <span></span>
</div>
```

### - 더블 보더 레디어스 애니메이션

파일경로 : any/ borderany.html , borderany.css 

## 02hover

### - 기본형 드롭다운 네비게이션

hover 다음에는 무조건 자식요소가 와야 적용된다

```css
a {
  color: black;
  text-decoration: none;
}
.dropdown {
  width: 200px;
}
.dropdown-btn {
  /* inherit은 부모의 너비를 상속함*/
  width: inherit;
  padding: 10px;
  font-size: 18px;
  background-color: yellowgreen;
  color: white;
  border: none;
  cursor: pointer;
}
.dropdown-submenu {
  display: none;
  border: 1px solid yellowgreen;
  width: inherit;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(167, 167, 167, 0.425);
}
.dropdown-submenu a {
  display: block;
  padding: 7px;
  text-align: center;
}
.dropdown-submenu a:hover {
  background-color: antiquewhite;
}

/* hover 다음에는 무조건 자식요소가 와야 작동함 */
.dropdown:hover .dropdown-submenu {
  display: block;
}
```

```html
<div class="dropdown">
    <button class="dropdown-btn">Real Estate Type</button>
    <div class="dropdown-submenu">
        <a href="#">All</a>
        <a href="#">One room</a>
        <a href="#">1.5 rooms</a>
        <a href="#">Two Room</a>
        <a href="#">Three Room</a>
        <a href="#">Officetel</a>
        <a href="#">Apartment</a>
    </div>
</div>
```

### - 오버하면 상세설명 나타나는 상품목록

drop/item.html , item.css

### - 마우스 오버되면 나타나는 툴팁 만들기

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.icon {
  position: relative;
  width: 125px;
  height: 125px;
  margin: 10px;
}
.icon:hover span {
  visibility: visible;
  opacity: 1;
}
.icon span {
  position: absolute;
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  top: -80px;
  /* 부모요소 너비의 반틈정도 움직임 */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  /* 자리값은 있지만 보이는것만 사라짐 display:none이랑은 다름 */
  visibility: hidden;
  /* hover의 효과를 꾸며줌 */
  transition: 0.5s;
}

/* span은 부모이다 근데 이미 포지션이 있기때매  또 포지션 부모로 줄필요없다 */
/* 툴팁 화살표 만들기 */
.icon span:after {
  content: "";
  position: absolute;
  background-color: black;
  width: 10px;
  height: 10px;
  transform: rotate(45deg) translateX(-50%);
  bottom: -5px;
  left: 50%;
}
```

→ `after`라고하면  `content: ""` 내용을 넣어줘야됨 

→ `visibility:hidden`과 `visibility:visible` 대신에 `pointer-events:none` 해줘도됨

→ `left: 50%` /  `transform: translateX(-50%)` : 가운데로 가게함

→ 포지션이 있는 곳에는 또 포지션을 해줄필요가 없다

### - 오버한 메뉴 외 나머지 흐려지는 네비게이션

```css
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
body {
  background-color: royalblue;
}
.gnb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
}
.gnb a {
  display: block;
  font-size: 40px;
  margin: 30px 0;
  text-decoration: none;
  color: white;
  transform: 0.5s;
}
.gnb a:before {
  content: "\f105";
  font-family: fontawesome;
  margin-right: 10px;
  opacity: 0;
}
/* hover먼저 해주고 before해준다 */
.gnb a:hover:before {
  opacity: 1;
}
/* 밑에 두개 hover효과 순서를 지켜야지 적용됨 */
.gnb:hover a {
  opacity: 0.3;
}
.gnb a:hover {
  opacity: 1;
}
```

→ `before` 해주고`content: "" ;` 해야된다

→  호버의 순서지키기

### - 위아래로 분리되는 호버 네비게이션 이펙트

트랜지션을했을때 시작할때 속성이없으면 트랜지션이안됨

```css
.back {
  transition: 0.5s;
  /* 먼저 top:0라고 해줘야지 transition이된다  */
  top: 0;
  background-color: white;
  color: black;
  height: inherit;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
```

파일경로: hover/divide.html, divide.css

### - 앱 UI 레이어 3D 호버 에니메이션

```css
transform: rotate(-30deg) skewX(25deg);
```

→ 30도 돌아서 25도 기울기

파일경로: hover/layer.html, layer.css

### - 폰트어썸 사용한 입력 필드(input)

인접선택자는 절대 위로 선택할수없다  `+` 선택자로 한다

```css
/* 인접선택자 사용하기 + */
.item input:focus + i {
  color: dodgerblue;
}
/* input에 focus가되면 안에 텍스트가 사라짐 */
.item input:focus::placeholder {
  visibility: hidden;
}
```

파일결로: hover/input.html, input.css

#  03before after 

### - before after 기본 사용법

```html
 <head>
    <style>
      a {
        text-decoration: none;
        color: black;
      }
      .gnb a:after {
        content: "update";
        background-color: tomato;
        color: white;
        margin-left: 5px;
        border-radius: 5px;
      }
      .gnb a::before {
        content: "01";
        background-color: royalblue;
        color: white;
        margin-right: 5px;
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div class="gnb">
      <a href="#">CodingWorks Online Class</a>
    </div>
  </body>
```

### - 보더 애니메이션 네비게이션 호버 이펙트

파일경로 : before,after/nav.html , nav.css 

```css
  /* 점을 가운데로 보내기 */
  left: 50%;
  transform: translateX(-50%);

/* 양쪽으로 퍼지게 보여줌 */
.gnb li a:hover:before {
  width: 100%;
}
```

### - SNS 아이콘 애니메이션

파일경로: before,after/snsicon.html, snsnicon,css

`before`은 자식요소이고 `position: absolute;` 이다

### - content attr을 활용한 텍스트 네비게이션(naver)

```html
<a href="#" data-link="메일"></a>
```

→ 사용자 정의속성이다 아무이름이나 해도 상관없다

## 04순서 체크 가상클래스

### - 애니메이션 스킬 프로그래스

파일경로: order/ ami.html , ami.css

```css
.progress-level {
  height: 10px;
  background: linear-gradient(to right, crimson, gold);
  animation: ani;
  animation-duration: 1s;
}

@keyframes ani {
  0% {
    width: 0%;
  }
}
```

→ 새로고침하면 프로그래스 레벨이 너비가0% 에서 지정 너비로 움직인다

```css
.item:nth-of-type(1) .progress-level {
  animation-delay: 0s;
}
```

→ nth-child 는 html에서 태그 출연순서로 매겨진다 

그래서 nth-child(5)으로 하면 마지막 .item의 다섯번째 순서가 먹히지않는다 (태그분별을 못함)

`nth-of-type(숫자)`를 하면 .item의 클래스 태그까지 분별해서 순서를 매겨준다 (더 정확함)

```css
 /* 애니메이션이 끝나면 100%에서 머물게 해줌 */
  animation-fill-mode: both;
```

→ 애니메이션은 0%에서 100%으로 동작을 하면 무조건 0%으로 다시 준비를 한다 

근데 100%에서 머물고 싶으면  `animation-fill-mode: both;`하면된다









































 







