import React from "react";
import "./GroceryList.css";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";
import "./Container.css";

export default class Container extends React.Component {
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
      <div className="container">
        <GroceryList />
        <ShoppingCart />
      </div>
    );
  }
}
