import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../providers/cart/cart.provider';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageSpan,
  CheckoutButton,
} from './cart-dropdown.styles';

const Cart = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
        )}
      </CartItemsContainer>
      <CheckoutButton
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default withRouter(Cart);
