import React from "react";

export const GroceryItem = ({ title }) => {
  console.log(title);
  return <li className="list-item"> {title} </li>;
};
