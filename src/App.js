import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/products"
            element={<ProductList addToCart={addToCart} cart={cart} />} /> 
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
