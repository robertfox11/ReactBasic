import React, { Fragment, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/Producto.jsx";

function App() {
  const date = new Date().getFullYear();
  const [products, saveProduct] = useState([
    { id: 1, name: "Shirt React JS", price: 10 },
    { id: 2, name: "T-Shirt Vue JS", price: 20 },
    { id: 3, name: "Pants Node JS", price: 30 },
    { id: 4, name: "Shoes Vanilla JS", price: 40 },
    { id: 5, name: "Skirt Angular JS", price: 50 },
  ]);
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
        />
      ))}

      <Footer date={date} />
    </Fragment>
  );
}

export default App;
