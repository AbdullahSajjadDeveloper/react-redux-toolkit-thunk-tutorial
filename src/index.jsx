import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./ReduxHandling/Store/store";
import App from "./App";
import "./Styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);
