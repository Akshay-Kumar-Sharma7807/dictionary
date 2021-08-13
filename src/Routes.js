import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Definations from "./components/Definations";
import About from "./components/About";
import Settings from "./components/Settings";
import Pro from "./components/Pro";
import { makeStyles, useTheme} from '@material-ui/core/styles'
import {Container} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor: theme.palette.background.default,

  }
}))

export default function Routes(props) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Switch style={{backgroundColor: theme.palette.background.default}}>
      <div className='container' style={{backgroundColor: theme.palette.background.default}}>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/settings"   exact>
        <Settings setDark={props.setDark} dark={props.dark} />
      </Route>
      <Route path="/defination/:search" exact>
        <Definations />
      </Route>
      <Route path="/pro" exact>
        <Pro />
      </Route>
      </div>
    </Switch>
  );
}
