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

css 자식선택자 : >  (바로밑에 자식)

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

## 기본 구문 만들기, 선택자

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

**선택자 종류**

css 클래스 , css아이디 , css태그 , this

**필수 함수**

click , mouseenter , mouseleave

**필수 메서드** 

slideDown() , slideUp() , stop() , show() , hide() , fadeIn() , fadeOut() , addClass() , removeClass() , children() , siblings()







































































































 







