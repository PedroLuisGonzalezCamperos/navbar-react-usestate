import React from "react";
import "./itemlistcontainer.css";

const Item = ({ product }) => {
  //este componente muestra la vista  de la cart

  return (
    <div>
      <div className="item">
        
        <img src={product.image} alt="" className="img-item" />
        <p className="text-item">{product.name}</p>
        <p className="text-item">${product.price}</p>
      </div>
    </div>
  );
};

export default Item;
