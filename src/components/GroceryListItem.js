import React from "react";

const GroceryListItem = ({ clickGrocery, isShoppingCart, grocery }) => {
  return (
    <li
      className="list-item"
      onClick={clickGrocery}
      key={grocery.id}
      value={grocery.title}
    >
      <span> {grocery.title}</span>
      <span>{isShoppingCart ? `Hoeveelheid: ${grocery.amount}` : ""}</span>
    </li>
  );
};

export default GroceryListItem;
