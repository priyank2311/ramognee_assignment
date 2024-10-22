import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductList({ addToCart, cart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          SHOPLANE
        </div>
        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Clothes</li>
          <li className="hover:text-gray-300 cursor-pointer">Accessories</li>
        </ul>
        <div className="flex space-x-4">
          <button
            onClick={goToCart}
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100">
            Cart ({cart.length})
          </button>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100">Logout</button>
        </div>
      </nav>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-200">
            <img src={product.image} alt={product.image} className='w-auto h-[300px]' />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button
              className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
              onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
