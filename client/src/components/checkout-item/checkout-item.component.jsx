import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextSpan,
  QuantitySpan,
  ArrowContainer,
  ValueSpan,
  RemoveButton,
} from './checkout-item.styles';

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextSpan>{name}</TextSpan>
      <QuantitySpan>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantitySpan>
      <TextSpan>{price}</TextSpan>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
