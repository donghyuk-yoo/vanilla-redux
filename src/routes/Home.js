import React, { useState } from "react";
import { connect } from "react-redux";
// connect에서 받은 props(toDos)를 인자로
function Home({toDos}) {
  const [text,setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  }

  return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}> 
      <input type="text" value={text} onChange={onChange}/>
      <button type="submit">submit</button>
    </form>
    <ul>
      {JSON.stringify(toDos)}
    </ul>
    </>
  );  
}
// state: store의 현재값, ownProps: react-router에 의해 HOME에 주어진 props
function mapStateToProps(state, ownProps) {
  // 리턴한 것을 HOME에 props로 전달
  return { toDos: state };

}
// 함수(여기선 mapStateToProps)와 컴포넌트(여기선 HOME)를 이용해 react-redux의 connect를 이용
// mapStateToProps 함수에 store 연결, redux state로부터 컴포넌트(여기선 HOME)에 prop으로 전달
export default connect(mapStateToProps)(Home) ;

