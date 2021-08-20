import React from "react";

const Item = ({ product, handleAdd }) => {
  return (
    <article className="item__container">
      <div className="item--card">
        <h2>{product.name}</h2>
        <img src={product.image} alt="SomeFruit" />
        <p>{product.description}</p>
        <button
          onClick={() => handleAdd(product)}
          disabled={product.stock <= 0 ? true : false}
        >
          Agregar al carrito
        </button>
      </div>
      <div className="item--details">
        <p>
          Price: <span>{product.precio}</span>
        </p>
        <p>
          Stock: <span>{product.stock}</span>
        </p>
      </div>
    </article>
  );
};

export default Item;
