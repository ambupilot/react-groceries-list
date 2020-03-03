import React from "react";

const ListItem = ({ clickItem, readonly, item }) => {
  return (
    <li
      className="list-item"
      onClick={clickItem}
      key={item.id}
      value={item.title}
    >
      <span> {item.title}</span>
      <span>{readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
    </li>
  );
};

export default ListItem;
