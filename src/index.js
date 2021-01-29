import { createStore } from 'redux';

const increase = document.getElementById("add");
const decrease = document.getElementById("minus");
const number = document.querySelector("span");

// initialize count
const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case 'ADD':
      return count+1;
    case 'minus':
      return count-1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: 'ADD'});
countStore.dispatch({ type: 'ADD'});
countStore.dispatch({ type: 'ADD'});
countStore.dispatch({ type: 'ADD'});
countStore.dispatch({ type: 'ADD'});
countStore.dispatch({ type: 'MINUS'});

console.log(countStore.getState());