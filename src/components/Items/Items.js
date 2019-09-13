import React from "react";

import styles from "./Items.module.css";
import Item from "./Item/Item";

const items = props => {
  let itemList = props.items.map(item => (
    <Item key={item.id} item={item} order={props.order} />
  ));
  return (
    <div className={styles.Items}>
      <h1>Items</h1>
      {itemList}
    </div>
  );
};

export default items;
