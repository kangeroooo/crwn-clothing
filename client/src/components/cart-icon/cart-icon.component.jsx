import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountSpan,
} from './cart-icon.styles';

const CartIcon = () => {
  const { cartItemsCount, toggleHidden } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountSpan>{cartItemsCount}</ItemCountSpan>
    </CartIconContainer>
  );
};

export default CartIcon;
