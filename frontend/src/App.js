import React from "react";
import {
  Switch, Route,
} from "react-router-dom";

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
        <None/>
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

function None() {
  return <h2>404</h2>
}

