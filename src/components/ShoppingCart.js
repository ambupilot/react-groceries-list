import React from "react";
import GroceryList from "./GroceryList";

const ShoppingCart = ({ groceryItems }) => {
  return <GroceryList groceryItems={groceryItems} />;
};

export default ShoppingCart;
