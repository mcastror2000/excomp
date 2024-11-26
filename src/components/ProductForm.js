import React, { useState, useRef } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import SimpleReactValidator from "simple-react-validator";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Este campo es obligatorio.",
        numeric: "Debe ser un número válido.",
        min: "El precio debe ser mayor que 0.",
      },
    })
  );
  const [, forceUpdate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      try {
        const newProduct = { name, price: parseFloat(price) };
        const docRef = await addDoc(collection(db, "products"), newProduct);
        onAddProduct({ id: docRef.id, ...newProduct });
        setName("");
        setPrice("");
        validator.current.hideMessages();
      } catch (error) {
        console.error("Error al agregar el producto:", error);
      }
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Nombre del Producto</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => validator.current.showMessageFor("name")}
        />
        {validator.current.message("name", name, "required")}
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          onBlur={() => validator.current.showMessageFor("price")}
        />
        {validator.current.message("price", price, "required|numeric|min:1")}
      </div>
      <button type="submit" className="btn btn-primary">
        <i className="fas fa-plus"></i> Agregar Producto
      </button>
    </form>
  );
}

export default ProductForm;
