import React, { useEffect, useState, useContext } from 'react';
import { commerce } from '../lib/commerce';
import Link from 'gatsby-link';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    commerce.products.list().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <nav className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Deleens Home Bake</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700">Home</Link>
            <Link to="/about" className="text-gray-700">About</Link>
            <Link to="/contact" className="text-gray-700">Contact</Link>
            <Link to="/cart" className="text-gray-700">Cart</Link>
          </div>
          <form className="flex">
            <input type="search" placeholder="Search" className="border p-2 rounded-l" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Search</button>
          </form>
        </div>
      </nav>
      <header className="hero bg-cover bg-center text-center text-white py-20" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <h1 className="text-4xl font-bold">Deleens Home Bake</h1>
        <p className="mt-4">Your home for delicious homemade baked goods.</p>
        <a href="#products" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">Shop Now</a>
      </header>
      <main className="container mx-auto mt-10">
        <section id="products">
          <h2 className="text-2xl font-bold mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card">
                <img src={product.media.source} alt={product.name} className="w-full" />
                <div className="p-4">
                  <h5 className="text-xl font-bold">{product.name}</h5>
                  <p className="text-gray-700">${product.price.formatted}</p>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
