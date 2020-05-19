import React from "react";

const Product = ({ product, cart, addCart, products }) => {
  const { name, price, id } = product;
  const selectProducto = (id) => {
    //Add producto con el metodo .filter
    const product = products.filter((product) => product.id === id)[0];
    //Añadimos carrito colocando sintaxis de arreglo pasando dos parametro no hay que modificar el useState
    addCart([...cart, product]);
    // console.log("comprando....", product);
  };
  return (
    <div>
      <h2>{name}</h2>
      <h3>€{price}</h3>
      {/* //creamos la funciont selectionado el */}
      <button type="button" onClick={() => selectProducto(id)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
