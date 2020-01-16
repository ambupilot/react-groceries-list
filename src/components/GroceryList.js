import React from "react";
import GroceryListItem from "./GroceryListItem";

class GroceryList extends React.Component {
  render() {
    const { groceryItems, isShoppingCart, handleClickGroceryItem } = this.props;
    const listItems = groceryItems
      ? groceryItems.map(grocery => (
          <GroceryListItem
            key={grocery.id}
            grocery={grocery}
            isShoppingCart={isShoppingCart}
            clickGrocery={handleClickGroceryItem}
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

export default GroceryList;
