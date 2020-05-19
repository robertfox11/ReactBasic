import React from "react";

const Product = ({ product }) => {
  const { name, price, id } = product;
  return (
    <div>
      <h2>{name}</h2>
      <h3>€{price}</h3>
    </div>
  );
};

export default Product;
