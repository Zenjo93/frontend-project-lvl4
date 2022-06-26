import React from "react";
import {
  Switch, Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap'

import NotFound from "./NotFound";
import Login from "./Login";

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  );
}

