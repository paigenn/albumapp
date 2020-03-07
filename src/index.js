import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import { SignIn, SignUp } from "./Authentication";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/app" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

const users = [
  [
    {
      id: 1,
      text: "description",
      completed: "Yes/No",
      priority: "High/Medium/Low"
    },
    {
      id: 1,
      text: "description",
      completed: "Yes/No",
      priority: "High/Medium/Low"
    }
  ],
  [
    {
      id: 1,
      text: "description",
      completed: "Yes/No",
      priority: "High/Medium/Low"
    },
    {
      id: 1,
      text: "description",
      completed: "Yes/No",
      priority: "High/Medium/Low"
    },
    {
      id: 1,
      text: "description",
      completed: "Yes/No",
      priority: "High/Medium/Low"
    }
  ]
];
