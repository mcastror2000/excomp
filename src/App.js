import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta principal: muestra el listado de productos */}
          <Route path="/products" element={<ProductList />} />
          
          {/* Ruta para registrar un usuario */}
          <Route path="/register" element={<Register />} />
          
          {/* Ruta para iniciar sesión */}
          <Route path="/login" element={<Login />} />
          
          {/* Ruta por defecto: redirige al inicio de sesión */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
