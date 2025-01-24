import React from 'react';
import { CartProvider } from '../context/CartContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
