import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  function handleCategory (event) {
    setSelectedCategory(event.target.value)
  }
  
  console.log(selectedCategory)
  return (

    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item) => selectedCategory === "All" || selectedCategory === item.category).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
