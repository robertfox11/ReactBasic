import React from "react";
import Product from "./Producto.jsx";
import "../App.css";
const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Carrito de la compra</h2>
    {/* Crearemos cuantos elemento hay en un arreglo con valor ternario  no es aconsejable poner if */}
    {cart.length == 0 ? (
      <p>no hay elemento en el cart</p>
    ) : (
      cart.map((product) => <Product key={product.id} product={product} />)
    )}
  </div>
);

export default Cart;
