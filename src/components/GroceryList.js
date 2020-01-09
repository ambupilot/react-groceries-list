import React from "react";
import { GroceryItem } from "./GroceryItem.js";
import "./GroceryList.css";

export default class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryInput: "",
      groceryItems: [
        { id: 1, title: "pizza eten" },
        { id: 2, title: "react leren" }
      ]
    };
  }
  render() {
    return (
      <div className="groceries-list">
        <ul>
          {this.state.groceryItems.map(grocery => (
            <GroceryItem title={grocery.title} key={grocery.id} />
          ))}
        </ul>
      </div>
    );
  }
}
