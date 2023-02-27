## Chapter 5 컴포넌트와 Props

[5.1 컴포넌트에 대해 알아보기](#51-컴포넌트에-대해-알아보기)  
[5.2 Props에 대해 알아보기](#52-props에-대해-알아보기)  
[5.3 컴포넌트 만들기](#53-컴포넌트-만들기)  
[5.4 컴포넌트 합성](#54-컴포넌트-합성)  
[5.5 컴포넌트 추출](#55-컴포넌트-추출)  
[5.6 댓글 컴포넌트 만들기](#56-댓글-컴포넌트-만들기)  

---

### 5.1 컴포넌트에 대해 알아보기  
리액트는 **컴포넌트 기반** 으로 컴포넌트들이 모여 하나의 컴포넌트를 구성, 컴포넌트들이 모여 전체 페이지를 구성  

- 리액트 컴포넌트 : 어떠한 속성들(props)을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴해주는 것  
<img width="163" alt="스크린샷 2023-02-28 오전 1 10 33" src="https://user-images.githubusercontent.com/101851472/221648219-5e5053c5-a99d-4738-a8d7-3391eeef3200.png">

---

### 5.2 Props에 대해 알아보기  
1. **Props의 개념**  
**prop** (property) : (리액트 컴포넌트의) 속성  
→ 같은 리액트 컴포넌트에서 속성을 바꾸고 싶은 때 사용하는 것  
<img width="411" alt="스크린샷 2023-02-28 오전 3 13 48" src="https://user-images.githubusercontent.com/101851472/221648512-3c659a41-27b0-4d4d-b8cb-5276c86fb895.png">
▶︎ props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체  


2. **Props의 특징**  
- 읽기 전용(Read-Only)
- 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 함 (pure 함수 같은 역할을 함)

(참고) 자바스크립트 함수의 속성  
> pure 함수 : 입력값을 변경하지 않음, 같은 입력값에 대해서는 항상 같은 출력값을 냄
~~~javaScript
function sum(a, b) {
    return a + b;
}
~~~
> impure 함수 : 입력으로 받은 파라미터 값을 변경
~~~javaScript
function withdraw(account, amount) {
    account.total -= amount;
}
~~~

3. Props 사용법  
JSX를 사용하는 경우, 키-값 쌍의 형태로 컴포넌트에 props를 넣을 수 있음
~~~javaScript
function App(props) {
    return (
        <Profile
            name="소플"
            introduction="안녕하세요, 소플입니다."
            viewCount={1500}
        />
    );
}
~~~

- 문자열 이외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우, 중괄호를 사용해서 감싸주어야 함  

---

### 5.3 컴포넌트 만들기  
1. 컴포넌트의 종류  
<img width="169" alt="스크린샷 2023-02-28 오전 3 15 33" src="https://user-images.githubusercontent.com/101851472/221648823-4c4b8e66-914a-4b83-9572-6c4868d8ec26.png">
- 함수 컴포넌트 → **훅(Hook)**
- 클래스 컴포넌트  

2. 함수 컴포넌트  
~~~javaScript
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}
~~~
→ 하나의 props 객체를 받아서 인사말이 담긴 리액트 엘리먼트를 리턴

3. 클래스 컴포넌트  
~~~javaScript
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}
~~~
→ 리액트의 모든 클래스 컴포넌트는 React.Component를 상속받아서 만든다!

4. 컴포넌트 이름 짓기  
- 컴포넌트의 이름은 항상 대문자로 시작해야 함 (리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문)

5. 컴포넌트 렌더링  
> 위의 함수 컴포넌트에서 생성한 Welcome이라는 함수 컴포넌트로 엘리먼트 렌더링 하는 코드
~~~javaScript
const element = <Welcome name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
~~~
---

### 5.4 컴포넌트 합성  
: **여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것**  
> Welcome 컴포넌트 3개를 포함한 App 컴포넌트
~~~javaScript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App(props) {
    return (
        <div>
            <Welcome name="Mike" />
            <Welcome name="Steve" />
            <Welcome name="Jane" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
~~~
<img width="165" alt="스크린샷 2023-02-28 오전 3 16 27" src="https://user-images.githubusercontent.com/101851472/221649009-84ba9904-e3f7-4e04-9e44-e23f2563dfce.png">

---

### 5.5 컴포넌트 추출  


---

### 5.6 댓글 컴포넌트 만들기  
