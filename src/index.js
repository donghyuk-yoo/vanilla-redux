import { createStore } from 'redux';

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const number = document.querySelector("span");

// initialize count
const countModifier = (count = 0) => {
  return count;
}

const store = createStore(reducer);
