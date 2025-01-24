import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { CartContext } from '../context/CartContext';

const ProductTemplate = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const product = data.commerceProduct;

  return (
    <div className="container mx-auto mt-10">
      <div className="product-details">
        <img src={product.media.source} alt={product.name} className="w-full" />
        <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 mt-2">${product.price.formatted}</p>
        <p className="text-gray-500 mt-4">{product.description}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );