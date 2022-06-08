import React from "react";
import ReactDOM from "react-dom";
import { Route,BrowserRouter as Router } from 'react-router-dom'
import App from "./App";
import precio from './Precio'
import reportWebVitals from "./reportWebVitals";

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/precio" component={precio} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
