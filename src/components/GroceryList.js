import React from "react";

export default class GroceryList extends React.Component {
  render() {
    const { groceryItems, readonly, handleClickGroceryItem } = this.props;
    console.log(groceryItems);
    return (
      <React.Fragment>
        {" "}
        <ul>
          {groceryItems
            ? groceryItems.map(grocery => (
                <li
                  className="list-item"
                  onClick={handleClickGroceryItem}
                  key={grocery.id}
                  value={grocery.title}
                >
                  <span> {grocery.title}</span>
                  <span>{readonly ? `amount: ${grocery.amount}` : ""}</span>
                </li>
              ))
            : " "}
        </ul>
      </React.Fragment>
    );
  }
}
