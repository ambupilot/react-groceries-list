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
    const handleClickGroceryItem = event => {
      const newShoppingItem = {
        id: this.state.shoppingListItems.length + 1,
        title: event.target.getAttribute("value")
      };

      this.setState(prevState => {
        const newList = prevState.shoppingListItems.concat(newShoppingItem);
        console.log("newlist", newList);
        return {
          shoppingListItems: newList
        };
      });
    };
    return (
      <div className="container">
        <GroceryList
          groceryItems={this.state.groceryItems}
          handleClickGroceryItem={handleClickGroceryItem}
        />
        <ShoppingCart groceryItems={this.state.shoppingListItems} />
      </div>
    );
  }
}
