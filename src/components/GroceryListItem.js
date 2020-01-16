import React from "react";

const GroceryListItem = ({ clickGrocery, readonly, grocery }) => {
  return (
    <li
      className="list-item"
      onClick={clickGrocery}
      key={grocery.id}
      value={grocery.title}
    >
      <span> {grocery.title}</span>
      <span>{readonly ? `Hoeveelheid: ${grocery.amount}` : ""}</span>
    </li>
  );
};

export default GroceryListItem;
