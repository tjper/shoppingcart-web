import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./CartItem.module.css";

const cartItem = props => (
  <ListItem className={styles.CartItem} divider>
    <ListItemText
      primary={props.cartItem.item.name}
      secondary={"$" + props.cartItem.item.price.toFixed(2)}
    />
    <TextField
      className={styles.TextField}
      id="standard-with-placeholder"
      label={props.cartItem.count}
      margin="dense"
      onKeyUp={event =>
        props.update(event.key, event.target.value, props.cartItem)
      }
    />
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={() => props.delete(props.cartItem.id)}
    >
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

export default cartItem;
