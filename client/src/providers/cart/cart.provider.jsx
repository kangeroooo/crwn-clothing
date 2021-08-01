import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  getCartItemsCount,
  getCartItemsValue,
  removeItemFromCart,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsValue, setCartItemsValue] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartItemsValue(getCartItemsValue(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartItemsValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
