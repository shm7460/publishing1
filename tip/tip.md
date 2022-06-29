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















