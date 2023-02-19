## Chapter 3 JSX 소개  

[3.1 JSX란?](#31-jsx란)  
[3.2 JSX의 역할](#32-jsx의-역할)  
[3.3 JSX의 장점](#33-jsx의-장점)  
[3.4 JSX의 사용법](#34-jsx의-사용법)  
[3.5 JSX의 코드 작성해 보기](#35-jsx의-코드-작성해-보기)  

---

### 3.1 JSX란?


**JSX** : 자바스크립트의 확장 문법  
  - ex) 자바스크립트 코드와 HTML 코드가 결합되어 있는 JSX 코드
~~~javaScript
const element = <h1>Hello, world!</h1>;
~~~
---

### 3.2 JSX의 역할  
- 내부적으로 XML/HTML 코드를 자바스크립트로 변환하는 과정 거침
- 리액트의 **createElement()**라는 함수가 JSX 코드를 자바스크립트 코드로 변환하는 역할을 함

> JSX로 작성한 코드
~~~JSX
class Hello extends React.Component {
    render(){
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
)
~~~
  - ReactDOM의 render() 함수를 사용해 실제 화면에 렌더링

> 자바스크립트로 작성한 코드
~~~javaScript
class Hello extends React.Component {
    render(){
        return React.creactElement('div', null, 'Hello ${this.props.toWhat}');
    }
}

ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root')
)
~~~

위의 두 코드를 봤을 때 JSX를 사용했던 부분이 React.createElement()라는 함수로 대체된 것을 알 수 있습니다.

#### createElement() 함수의 파라미터
~~~javaScript
React.creactElement(
  type, [props], [...children]
)
~~~
- **type** : 엘리먼트의 유형 (HTML 태크, 리액트 컴포넌트 등)
- **props** : 속성들
- **children** : 현재 엘리먼트가 포함하고 있는 자식 엘리먼트

---

### 3.3 JSX의 장점  
1. 코드가 간결해진다.
  ~~~javaScript
  // JSX 사용함
  <div>Hello, {name}</div>
  // JSX 사용 안 함
  React.createElement('div', null, 'Hello, ${name}');
  ~~~

2. 가독성이 향상된다.
  - 유지 보수 관점에서도 굉장히 중요한 부분
  - 가독성이 높을수록 코드상에 존재하는 버그를 쉽게 발견 가능

3. 보안성   
**Injection Attack**이라 불리는 해킹 방법을 방어함으로써 보안성이 올라간다.

---

### 3.4 JSX의 사용법  
- 모든 자바스크립트 문법 지원
- HTML과 자바스크립트가 섞인 형태로 코드 작성
- XML/HTML 코드를 사용하는 중 **자바스크립트 코드를 사용하고 싶은 경우**, {} 써서 묶어준다.
  - {} 사이에는 변수, 함수 호출 가능

- 태그 속성에 값을 넣고 싶은 경우
  ~~~JSX
  // 큰따옴표 사이에 문자열을 넣거나
  const element = <div tabIndex="0"></div>;
  // 중괄호 사이에 자바스크립트 코드를 넣으면 됨!
  const element = <img src={user.avatarUrl}></img>;
  ~~~

- **children** 정의
  ~~~JSX
  const element = (
    <div>
      <h1>안녕하세요</h1>
      <h2>열심히 래액트를 공부해 봅시다!</h2>
    </div>)
  ~~~
  - 코드에서 div 태그의 children은 h1, h2 태그!

### 3.5 JSX의 코드 작성해 보기
> Book.jsx
~~~JSX
import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}

export default Book;
~~~

> Library.jsx
~~~JSX
import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    )
}

export default Library;
~~~

> index.js 수정 
~~~javaScript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
~~~

작성 완료 후 터미널에서 **npm start** 입력해 줍니다.