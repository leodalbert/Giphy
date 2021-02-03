import { createSelector } from 'reselect';
import { initialState } from 'reducers/favorites';

export const selectFavorites = (state) => state.favorites || initialState;
export const selectFavoriteGifs = (state) => selectFavorites(state).favorites;
export const selectFavoriteLoading = (state) =>
  selectFavorites(state).favLoading;

export const makeSelectFaveIds = createSelector(selectFavoriteGifs, (faves) => {
  return faves.map((gif) => gif.id);
});
