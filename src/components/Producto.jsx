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
  const deleteProducto = (id) => {
    //
    const products = cart.filter((product) => product.id !== id);
    //colocar los productos en el state
    addCart(products);
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>€{price}</h3>
      {/* //creamos la funciont selectionado el */}
      {products ? (
        //si existe el producto tenemos el boton comprar
        <button type="button" onClick={() => selectProducto(id)}>
          Buy
        </button>
      ) : (
        <button type="button" onClick={() => deleteProducto(id)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Product;
