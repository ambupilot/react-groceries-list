import React from "react";
import GroceryList from "./GroceryList";

const ShoppingCart = ({ title }) => {
  return <GroceryList readonly={false} />;
};

export default ShoppingCart;
