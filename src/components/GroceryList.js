import React from "react";

export default class GroceryList extends React.Component {
  render() {
    const { groceryItems, readonly, handleClickGroceryItem } = this.props;
    console.log(groceryItems);
    return (
      <div className="groceries-list">
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
                  {readonly ? "" : <button>X</button>}
                </li>
              ))
            : " "}
        </ul>
      </div>
    );
  }
}
