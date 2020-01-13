import React from "react";
import GroceryList from "./GroceryList";

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
  return (
    <React.Fragment>
      <button className="add-grocery-button" onClick={handleClickEmptyCart}>
        Empty Cart
      </button>
      <GroceryList readonly={true} groceryItems={groceryItems} />
    </React.Fragment>
  );
};

export default ShoppingCart;
