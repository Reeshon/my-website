import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'gatsby-link';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price.raw, 0);

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
        </div>
      </nav>
      <div className="container mt-5 pt-5">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <div className="cart-items">
            <div className="row">
              <div className="col-md-8">
                {cart.map((product) => (
                  <div key={product.id} className="cart-item">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={product.media.source} alt={product.name} className="img-fluid" />
                      </div>
                      <div className="col-md-8">
                        <h5>{product.name}</h5>
                        <p>${product.price.formatted}</p>
                        <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
                <button className="btn btn-primary btn-block" onClick={clearCart}>Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart-message">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
