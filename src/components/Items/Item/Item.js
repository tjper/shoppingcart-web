import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import styles from "./Item.module.css";

const item = props => (
  <Card className={styles.Item}>
    <CardContent>
      <Typography gutterBottom variant="h5">
        {props.item.name}
      </Typography>
      <Typography gutterBottom variant="body1">
        {props.item.description}
      </Typography>
      <Typography variant="h6">${props.item.price.toFixed(2)}</Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => props.order(props.item.id)}
      >
        Order
      </Button>
    </CardActions>
  </Card>
);

export default item;
