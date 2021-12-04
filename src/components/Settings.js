import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { Container, Card } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Settings(props) {
  const [checked, setChecked] = React.useState(
    localStorage.getItem("dark") === 'true' ? true : false
  );
  console.log('theme', localStorage.getItem("dark") === 'true' ? true : false)
  useEffect(() => {
    setChecked(() => localStorage.getItem("dark") === 'true' ? true : false)
  }, [])

  let toggleChecked = () => {
    console.log(props.dark);
    console.log("boolean is ", true);
    props.setDark(!checked);
    localStorage.setItem("dark", !checked);
    setChecked((previous) => !previous);
  }


  const classes = useStyles();
  // const [checked, setChecked] = React.useState(['wifi']);
  //
  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];
  //
  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //
  //   setChecked(newChecked);
  // };

  return (
    <Container maxWidth='sm' style={{ marginTop: 50 }}>
      <Card elevation={3}>
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
          <ListItem>
            <ListItemIcon>
              {checked ? <Brightness3Icon /> : <Brightness7Icon />}
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Dark Theme" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={toggleChecked}
                checked={checked}
                color='primary'
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>
    </Container>
  );
}
