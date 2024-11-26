import React, { useState } from "react";
import ProductForm from "./ProductForm";

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Productos</h1>
      <ProductForm onAddProduct={addToCart} />
      <div className="mt-4">
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <div className="alert alert-warning">El carrito está vacío</div>
        ) : (
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductList;
