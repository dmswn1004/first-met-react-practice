## Chapter 2 리액트 시작하기

[2.1 HTML만으로 간단한 웹사이트 만들기](#21-html만으로-간단한-웹사이트-만들기)  
[2.2 CSS를 사용하여 웹사이트 스타일링하기](#22-css를-사용하여-웹사이트-스타일링하기)  
[2.3 웹사이트에 React.js 추가하기](#23-웹사이트에-reactjs-추가하기)  
[2.4 create-react-app](#24-create-react-app)  

---

### 2.1 HTML만으로 간단한 웹사이트 만들기
> index.html 파일 작성

~~~html
<html>
    <head>
        <title>소플의 블로그</title>
    </head>
    <body>
        <h1>소플의 블로그에 오신 여러분을 환영합니다!</h1>
    </body>
</html>
~~~
<img width="1552" alt="스크린샷 2023-02-17 오전 3 19 25" src="https://user-images.githubusercontent.com/101851472/219453491-08979162-ea1e-4a3d-8fa8-981c9fa14598.png">

---

### 2.2 CSS를 사용하여 웹사이트 스타일링하기
> styles.css 파일 작성
~~~css
h1 {
    color: green;
    font-style: italic;
}
~~~

> index.html 파일에 추가 (head 태그 안)
~~~html
        <link rel="stylesheet" href="styles.css">
~~~
<img width="1552" alt="스크린샷 2023-02-17 오전 3 23 31" src="https://user-images.githubusercontent.com/101851472/219467977-6bf8980b-d89a-4148-b295-2e0095f524b5.png">

---

### 2.3 웹사이트에 React.js 추가하기  
> index.html 파일에 추가 (body 태그 안)
~~~html
        <div id="root"></div>

        <!-- 리액트 가져오기 -->
        <script src="http://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="http://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

        <!-- 리액트 컴포넌트 가져오기 -->
        <script src="MyButton.js"></script>
~~~

>  MyButton.js 파일 작성
~~~javaScript
function MyButton(props) {
    const [isClicked, setIsClickend] = Reeact.useState(false);

    return React.createElemet(
        'button',
        { onClick: () => setIsClickend(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(Reeact.createElemet(MyButton), domContainer);
~~~

---

### 2.4 create-react-app

> 프로젝트 생성
~~~zsh
npx create-react-app [프로젝트명]
~~~
> 애플리케이션 실행
~~~zsh
cd [프로젝트명]
npm start
~~~
<img width="1552" alt="스크린샷 2023-02-17 오전 4 02 00" src="https://user-images.githubusercontent.com/101851472/219467948-8c639703-efd6-4efd-8a31-12430251df90.png">

