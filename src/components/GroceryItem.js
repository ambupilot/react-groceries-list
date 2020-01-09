import React from "react";

export const GroceryItem = ({ title, readonly }) => {
  return (
    <li className="list-item">
      {title}
      {readonly ? "" : <button>X</button>}
    </li>
  );
};
