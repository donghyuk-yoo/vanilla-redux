import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";

ReactDOM.render(
  // connecting react-redux to index
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);