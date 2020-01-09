import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GroceryList />
      </header>
    </div>
  );
}

export default App;
