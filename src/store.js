import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 초기값 빈 배열
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // 리덕스툴킷(immer)이 mutate state명령을 concat처럼 바꿔준다.
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // {}가 없다면 return이 생략된 것, filter함수가 state(상태)를 object로 반환함으로 가능, 위의
    // push는 state반환함수가 아니므로 사용 불가
    // 즉 리덕스 툴킷은 state를 mutate하거나 state object를 반환해야 한다.
    state.filter((toDo) => toDo.id !== action, payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
