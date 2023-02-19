## Chapter 4 엘리먼트 렌더링  

[4.1 엘리먼트에 대해 알아보기](#41-엘리먼트에-대해-알아보기)  
[4.2 엘리먼트 렌더링하기](#42-엘리먼트-렌더링하기)  
[4.3 렌더링된 엘리먼트 업데이트하기](#43-렌더링된-엘리먼트-업데이트하기)  
[4.4 시계 만들기]  

---  

### 4.1 엘리먼트에 대해 알아보기  
1. **엘리먼트의 정의**  
**엘리먼트** : 리액트 앱을 구성하는 가장 작은 블록들
  - 크롬 개발자 도구의 엘리먼트 탭 → **DOM 엘리먼트**, HTML 요소

<img width="358" alt="스크린샷 2023-02-19 오후 8 23 16" src="https://user-images.githubusercontent.com/101851472/219944903-e4e02e9b-631f-4a0a-9bb5-09b5bfd6f998.png">
  
  - **DOM 엘리먼트** : 실제 브라우저의 DOM에 존재하는 엘리먼트  
  - **리액트 엘리먼트** : Virtual DOM에 존재하는 엘리먼트 → **DOM 엘리먼트의 가상 표현**

2. **엘리먼트의 생김새**  
: 리액트 앨리먼트는 **자바스크립트 객체** 형태로 존재
  - 컴포넌트 유형(에: Button) & 속성(예: color) 및 내부의 모든 자식에 대한 정보를 포함
> 엘리먼트
~~~javaScript
{
  type: 'button',
  props: {
    className; 'bg-green',
    children: {
      type: 'b',
      prors: {
        children: 'Hello, element!'
      }
    }
  }
}
~~~
~~~JSX
<button class='bg-green'>
  <b>
    Hello, element!
  </b>
</button>
~~~

3. **엘리먼트의 특징**
- **불변성** : 변하지 않는 성질  
  - 엘리먼트 생성 후에는 children이나 attributes를 바꿀 수 없다.
<img width="416" alt="스크린샷 2023-02-19 오후 8 23 42" src="https://user-images.githubusercontent.com/101851472/219954205-d166379e-faf0-4fda-b7cf-77a59f5afe1f.png">
  → 화면에 변경된 엘리먼트들을 보여주기 위해서 **새로운 엘리먼트를 만들어서 기존 엘리먼트와 바꿔치기한다.**  
  
---

### 4.2 엘리먼트 렌더링하기  
~~~javaScript
<div id="root"></div>
~~~

**Root DOM node** : div 태그 안에 리액트 엘리먼트들이 렌더링 됨

<img width="210" alt="스크린샷 2023-02-19 오후 8 24 26" src="https://user-images.githubusercontent.com/101851472/219961794-b2547205-4554-4b1e-9b56-bf37ba0dccdb.png">

→ 리액트의 엘리먼트가 렌더링되는 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정

---

### 4.3 렌더링된 엘리먼트 업데이트하기  

