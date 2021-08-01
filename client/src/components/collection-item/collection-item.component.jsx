import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan,
  AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooterContainer>
      <AddButton
        className='custom-button'
        onClick={() => addItem(item)}
        inverted
      >
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
