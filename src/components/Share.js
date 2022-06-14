import React from 'react';
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const Share = (props) => {

  const handleClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "Dictionary",
        text: "Check out Dictionary",
        url: "https://aks-dictionary.netlify.app",
      })
        .then(() => { console.log("Share successful") })
        .catch(() => { console.log("Share Error") })
      console.log("Sharing");
    }
    else {
      console.log('Sharing is not supported');
    }
  }

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ShareIcon />
        </ListItemIcon>
        <ListItemText primary="Share" />
      </ListItem>
    </List>
  )
}

export default Share;

    // <Container>
    //   <Button onClick={handleClick}>
    //   Share
    //   </Button>
    // </Container>



// <TextField onChange= {(e) => {
//   setEmail(e.target.value);
// }}>
// </TextField>
