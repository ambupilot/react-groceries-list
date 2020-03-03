import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const { items, isShoppingCart, handleClickItem } = this.props;
    const listItems = items
      ? items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            readonly={isShoppingCart}
            clickItem={handleClickItem}
          />
        ))
      : " ";

    return (
      <React.Fragment>
        <ul>{listItems}</ul>
      </React.Fragment>
    );
  }
}

export default List;
