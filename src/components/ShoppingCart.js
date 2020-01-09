import React from "react";
import GroceryList from "./GroceryList";

const ShoppingCart = ({ groceryItems, emptyCart }) => {
  return (
    <React.Fragment>
      <GroceryList readonly={true} groceryItems={groceryItems} />
    </React.Fragment>
  );
};

export default ShoppingCart;
