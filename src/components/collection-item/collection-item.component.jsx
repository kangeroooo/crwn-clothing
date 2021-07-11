import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan,
  AddButton,
} from './collection-item.styles';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooterContainer>
      <AddButton className='custom-button' onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
