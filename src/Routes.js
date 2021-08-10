import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Definations from "./components/Definations";
import About from "./components/About";
import Settings from "./components/Settings";
import Pro from "./components/Pro";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/settings" exact>
        <Settings />
      </Route>
      <Route path="/defination/:search" exact>
        <Definations />
      </Route>
      <Route path="/pro" exact>
        <Pro />
      </Route>
    </Switch>
  );
}
