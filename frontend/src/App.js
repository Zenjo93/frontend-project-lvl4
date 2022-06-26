import React from "react";
import {
  Switch, Route,
} from "react-router-dom";
import NotFound from "./NotFound";

export default function App() {
  return (<div>
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route exact path="/">
        <Slash/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </div>);
}

function Login() {
  return <h2>Login</h2>;
}

function Slash() {
  return <h2>Slash</h2>;
}

