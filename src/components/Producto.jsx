import React from "react";

const Product = ({ product }) => {
  const { name, price, id } = product;
  const selectProducto = (id) => {
    console.log("comprando....", id);
  };
  return (
    <div>
      <h2>{name}</h2>
      <h3>€{price}</h3>
      {/* //creamos la funciont selectionado el producto */}
      <button type="button" onClick={() => selectProducto(id)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
