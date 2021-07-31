import React from 'react';
import { withRouter } from 'react-router';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle,
} from './menu-item.styles';

const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  history,
  match,
  ...otherProps
}) => (
  <MenuItemContainer
    {...otherProps}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>SHOP NOW</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
