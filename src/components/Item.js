import React, {useState} from "react";

function Item({ name, category }) {
  const [itemSold, setItemSold] = useState (false)

  function handleButton (event) {
    setItemSold(!itemSold)
  }
  
  return (
    <li className={itemSold ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButton} className="add">{itemSold ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
