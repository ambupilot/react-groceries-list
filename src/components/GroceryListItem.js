import React from "react";

const GroceryListItem = ({ clickGrocery, readonly, grocery }) => {
  console.log('grocery.id', grocery.id);
  return (
    <li
      className="list-item"
      onClick={clickGrocery}
      key={grocery.id}
      value={grocery.title}
    >
      <span>{grocery.title}</span>
      <span>{readonly ? `amount: ${grocery.amount}` : ""}</span>
    </li>
  );
};
export default GroceryListItem;
