import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const value = React.useMemo(() => ({
    cart, setCart,
  }), [cart]);

  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
