import { memoize } from 'lodash';
import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectShopErrorMessage = createSelector(
  [selectShop],
  (shop) => shop.errorMessage
);

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsShopCollectionsLoaded = createSelector(
  [selectShopCollections],
  (collections) => !!collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
