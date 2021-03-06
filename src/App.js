import React, { Fragment, useState } from "react";
// import logo from "./logo.svg";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/Producto.jsx";
import Cart from "./components/Cart.jsx";

import json from "./json";
console.log(json, "hola");

function App() {
  const date = new Date().getFullYear();
  const [products, saveProduct] = useState(json);
  //agregar carrito
  const [cart, addCart] = useState([]);
  return (
    <Fragment>
      <Header title="Tienda Virtual" />
      {/* mostrar los productos utilizmamos map por que retorna un valor*/}
      <h1>Lista de Productos</h1>
      {products.map((product) => (
        //Component Product.jsx
        <Product
          // lo pasamos como prop los producto que hemos creado en useState
          //cada componenete debe tener un key que lo haga unico7
          key={product.id}
          product={product}
          //agregamos unos props para que se puede agregar los datos
          products={products}
          cart={cart}
          addCart={addCart}
        />
      ))}
      <Cart cart={cart} addCart={addCart} />

      <Footer date={date} />
    </Fragment>
  );
}

export default App;
