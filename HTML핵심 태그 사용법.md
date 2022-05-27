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

https://blog.naver.com/lamb81/221758735427













