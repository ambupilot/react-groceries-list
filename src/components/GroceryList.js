import React from "react";
import { GroceryItem } from "./GroceryItem.js";

export default class GroceryList extends React.Component {
  render() {
    const { groceryItems, readonly } = this.props;
    return (
      <div className="groceries-list">
        <ul>
          {groceryItems
            ? groceryItems.map(grocery => (
                <GroceryItem
                  readonly={readonly}
                  title={grocery.title}
                  key={grocery.id}
                />
              ))
            : " "}
        </ul>
      </div>
    );
  }
}
