/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  let [title, setTitle] = useState(["HTML", "JavaScipt", "React"]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  function changeLike() {
    setLike(like + 1);
  }
  function modalOpen() {
    setModal((modal) => !modal);
  }

  function LikeUp() {
    return (
    <div>
        <span
         className="like" 
         onClick={()=> {changeLike}}>
        👍
      </span>
      {like}
    </div>
    )
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Develope Blog</div>
      </div>

      {title.map((a) => {
        return (
          <div className="list">
            <h3 onClick={modalOpen}>{a}</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      {modal === true ? <Modal /> : null}

      <button onClick={modalOpen}>Modal</button>
    </div>
  );
}



function Modal() {
  return (
    <div className="modal">
      <h2>title</h2>
      <p>date</p>
      <p>details</p>
    </div>
  );
}


export default App;
