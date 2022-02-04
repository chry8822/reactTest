/*eslint-disable*/
import React, { useState, useCallback } from "react";
import "./App.css";
import logo from "./logo.svg";

function App(props) {
  let [title, setTitle] = useState(["HTML", "JavaScipt", "React"]);
  let [modal, setModal] = useState(false);
  let [currentNum, setCurrentNum] = useState(-1);
  let [inputResult,setInputResult] = useState('');

  function modalOpen(titleIndex) {
    // 현재(pushNum) 리스트가 켜져 있는 상태에서 같은리스트(i) 누르면 꺼진다.
    // 아니면 켜져있다.
    setModal((prevModal)=>{
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

      
       <List title={title} modalOpen={modalOpen}/>
   

      {modal === true ? <Modal title={title} currentNum={currentNum} /> : null}


      {/* <input onChange={(e)=>{setInputResult(e.target.value)}}/> */}

      <div className="publish">
        <input onChange={(e)=>{setInputResult(e.target.value)}}/>
        <button onClick={()=>{}}>Save</button>
      </div>

      <button onClick={modalOpen}>Modal</button>
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

function List({title, modalOpen}){
  return (
    title.map((listTitle,titleIndex)=>{
      return(
    <div className="list">
      <h3 onClick={()=> modalOpen(titleIndex)}>{listTitle}</h3>
      <LikeUp />
      <p>2월 17일 발행</p>
      <hr />
    </div>
      )
    })
  );
}


export default App;
