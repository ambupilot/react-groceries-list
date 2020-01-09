import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";
import { InputField } from "./components/InputField";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryInput: "",
      groceryItems: [
        { id: 1, title: "appels" },
        { id: 2, title: "pak melk" }
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
        return {
          shoppingListItems: newList
        };
      });
    };

    const emptyCart = () => {
      this.setState({ shoppingListItems: [] });
    };

    return (
      <div className="container">
        <div className="groceries-list">
          <h1>Boodschappenlijst</h1>
          <InputField />
          <GroceryList
            groceryItems={this.state.groceryItems}
            handleClickGroceryItem={handleClickGroceryItem}
          />
        </div>
        <div className="groceries-list basket">
          <h1>Winkelmand</h1>
          <button className="add-grocery-button" onClick={emptyCart}>
            Empty Cart
          </button>
          <ShoppingCart
            emptyCart={emptyCart}
            groceryItems={this.state.shoppingListItems}
          />
        </div>
      </div>
    );
  }
}
