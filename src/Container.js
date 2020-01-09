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
        { id: 2, title: "pak melk" },
        { id: 2, title: "chocola" }
      ],
      shoppingListItems: [{ id: 1, title: "chocola", amount: 2 }]
    };
  }
  render() {
    const addNewShoppingListItem = itemTitle => {
      console.log("add new");
      const newShoppingItem = {
        id: this.state.shoppingListItems.length + 1,
        title: itemTitle,
        amount: 1
      };

      this.setState(prevState => {
        const newList = prevState.shoppingListItems.concat(newShoppingItem);
        return {
          shoppingListItems: newList
        };
      });
    };
    const addAmountToItem = itemTitle => {
      console.log("add existing");
      const shoppingList = [...this.state.shoppingListItems];
      const newList = shoppingList.map(shoppingItem => {
        if (shoppingItem.title == itemTitle) {
          shoppingItem.amount++;
        }
        return shoppingItem;
      });
      this.setState({ shoppingListItems: newList });
    };

    const handleClickGroceryItem = event => {
      const clickedItem = event.target.getAttribute("value");
      const currentShoppingList = this.state.shoppingListItems;

      const shoppingListItem = currentShoppingList.filter(
        item => item.title === clickedItem
      );

      shoppingListItem.length === 0
        ? addNewShoppingListItem(clickedItem)
        : addAmountToItem(clickedItem);
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
