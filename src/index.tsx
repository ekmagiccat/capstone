// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/App";
// import "bootstrap/dist/css/bootstrap.css";
// import { Provider } from "react-redux";
// import {store}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
