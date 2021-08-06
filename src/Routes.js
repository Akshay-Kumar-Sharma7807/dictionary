import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        About
      </Route>
      <Route path="/settings" exact>
        Settings
      </Route>
      <Route path="/defination" exact>
        Defination
      </Route>
      <Route path="/pro" exact>
        Upgrade to pro
      </Route>
    </Switch>
  );
}
