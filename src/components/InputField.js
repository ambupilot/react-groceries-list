import React from "react";

export const InputField = ({ addGrocery, handleChange }) => {
  return (
    <form className="groceries-input" onSubmit={e => {e.preventDefault()
      console.log('e', e);}
      }>
      
      <input
        placeholder="Vul je boodschappen in"
        type="search"
        onChange={handleChange}
      ></input>
      <button onClick={addGrocery}>
        Voeg toe
      </button>
    </form>
  );
};
