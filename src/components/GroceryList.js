import React from "react";
import { GroceryItem } from "./GroceryItem.js";

export default class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "pizza eten" },
        { id: 2, title: "react leren" }
      ]
    };
  }
  render() {
    return (
      <div className="groceries-list">
        <h1> Dingen die ik nog moet doen:</h1>
        <div className="groceries-input">
          <input placeholder="Vul je boodschappen in"></input>
        </div>
        <ul>
          {this.state.groceryItems.map(grocery => (
            <GroceryItem title={grocery.title} />
          ))}
        </ul>
      </div>
    );
  }
}
