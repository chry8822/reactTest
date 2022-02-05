/*eslint-disable*/
import React, { useState, useCallback } from "react";
import "./App.css";
import logo from "./logo.svg";

function App(props) {
  let [title, setTitle] = useState(["HTML", "JavaScipt", "React"]);
  let [modal, setModal] = useState(false);
  let [currentNum, setCurrentNum] = useState(-1);
  let [inputResult, setInputResult] = useState('');

  function modalOpen(titleIndex) {
    // 현재(pushNum) 리스트가 켜져 있는 상태에서 같은리스트(i) 누르면 꺼진다.
    // 아니면 켜져있다.
    setModal((prevModal) => {
      return (
        currentNum === titleIndex ?
          !prevModal
          : true
      )
    });
    setCurrentNum(titleIndex)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Develope Blog</div>
      </div>


      <List title={title} modalOpen={modalOpen} />


      {modal === true ? <Modal title={title} currentNum={currentNum} /> : null}


      {/* <input onChange={(e)=>{setInputResult(e.target.value)}}/> */}

      <div className="publish">
        <input onChange={(e) => { setInputResult(e.target.value) }} />
        <button onClick={() => { }}>Save</button>
      </div>

      <button onClick={modalOpen}>Modal</button>

      {/* <Profile /> */}
    </div>
  );
}


function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.currentNum]}</h2>
      <p>date</p>
      <p>details</p>
    </div>
  );
}


function LikeUp() {
  let [like, setLike] = useState(0);
  function changeLike() {
    setLike(like + 1);
  }
  return (
    <div>
      <span
        className="like"
        onClick={changeLike}>
        👍
      </span>
      {like}
    </div>
  )
}

function List({ title, modalOpen }) {
  return (
    title.map((listTitle, titleIndex) => {
      return (
        <div className="list">
          <h3 onClick={() => modalOpen(titleIndex)}>{listTitle}</h3>
          <LikeUp />
          <p>2월 17일 발행</p>
          <hr />
        </div>
      )
    })
  );
}


// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = { name : "ironMan" }
   
//   }

//   changeName = () => {
//     // 버튼 클릭시 스테이트가 변경된다.
//     if (this.state.name === "ironMan") {
//       this.setState({name: "captin america"})
//     } else {
//       this.setState({name: "ironMan"})
//     }
    
//   }

//   render() {
//     return (
//       <div>
//         <h3>
//           프로파일입니다.
//         </h3>
//         <p>i'am { this.state.name } </p>
//         <button onClick={this.changeName}>button</button>
//       </div>
//     )
//   }
// }
// 옛날 리액트 문법 .
// class: 변수/함수 보관하는 덩어리
// extends 오른쪽에 있는 속성을 상속받는다.
// state 는 constructor 안에 작성
// constructor : class 의 변수/초기값을 저장할때 사용

export default App;
