import React from "react";
import GroceryList from "./GroceryList";

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
  return (
    <React.Fragment>
      <button className="button-primary" onClick={handleClickEmptyCart}>
        Leeg de winkelmand
      </button>
      <GroceryList readonly={true} groceryItems={groceryItems} />
    </React.Fragment>
  );
};

export default ShoppingCart;
