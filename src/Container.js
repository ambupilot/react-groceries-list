import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryInput: "",
      groceryItems: [
        { id: 1, title: "appels" },
        { id: 2, title: "brood" }
      ],
      shoppingListItems: [{ id: 1, title: "chocola" }]
    };
  }
  render() {
    return (
      <div className="container">
        <GroceryList groceryItems={this.state.groceryItems} />
        <ShoppingCart groceryItems={this.state.shoppingListItems} />
      </div>
    );
  }
}
