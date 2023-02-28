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
: **큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 과정**    
→ 컴포넌트의 재사용성 올라감 (컴포넌트의 기능과 목적이 명확해지고 props도 단순해짐)  
→ 개발 속도 향상  
> Comment 컴포넌트
~~~javaScript
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
~~~

> Avatar 추출  
~~~javaScript
function Avatar(props) {
    return (
        <img className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}
~~~

> UserInfo 추출  
~~~javaScript
function UserInfo(props) {
    return (
        <div className="user-info">
                <Avatar user={props.user} />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>
    );
}
~~~

> 추출한 컴포넌를 Comment 컴포넌트에 반영
~~~javaScript
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
~~~

<img width="171" alt="스크린샷 2023-02-28 오후 2 26 26" src="https://user-images.githubusercontent.com/101851472/221773630-cb3fb359-d487-4a52-820c-c21dc7620966.png">

▶︎ 컴포넌트는 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋다!

---

### 5.6 댓글 컴포넌트 만들기  
> Comment.jsx 
~~~javaScript
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>

        </div>
    );
}

export default Comment;
~~~

> CommentList.jsx
~~~javaScript
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김철수",
        comment: "안녕하세요! ",
    },
    {
        name: "홍길동",
        comment: "반가워요! ",
    },
    {
        name: "김땡땡",
        comment: "잘 부탁드려요~",
    },
];

function CommentList(props) {
    return (
        <dv>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </dv>
    );
}

export default CommentList;
~~~

> index.js 수정  
~~~javaScript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
~~~

→ **npm start**  
<img width="1552" alt="스크린샷 2023-02-28 오후 3 29 01" src="https://user-images.githubusercontent.com/101851472/221773555-ee0b31df-715a-436f-aa76-16bc51477021.png">
