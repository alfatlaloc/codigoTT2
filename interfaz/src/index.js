import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import {
    BrowserRouter as Router
  } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);