import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart, addToCart }) {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
              <div className="flex space-x-4 mt-2">
                <button
                  className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(index)}>
                  Remove from Cart
                </button>
                <button
                  className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
                  onClick={() => addToCart(product)}>
                  Add More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <button
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
          onClick={goToProducts}>
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default Cart;
