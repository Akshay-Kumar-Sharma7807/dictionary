import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import ColorPicker from "./ColorPicker";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function SwipeableTemporaryDrawer({ setColor, setShowPicker }) {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const [menu, setMenu] = React.useState({
    Inbox: "<InboxIcon />",
    Starred: "<InboxIcon />",
    "Send email": "<InboxIcon />",
    Drafts: "<InboxIcon />",
  });

  const toggleState = (newState) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ left: newState });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleState(false)}
      onKeyDown={toggleState(false)}
    >
      <List>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem button onClick={() => setShowPicker(true)}>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText primary="Change Theme" />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {/* {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <Link to="/pro">
          <ListItem button>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Upgrade To PRO" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleState(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleState(false)}
          onOpen={toggleState(true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
