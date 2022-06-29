# scrolling

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