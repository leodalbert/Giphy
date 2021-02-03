import { createSelector } from 'reselect';
import { initialState } from 'reducers/favorites';

export const selectFavorites = (state) => state.favorites || initialState;
export const selectFavoriteGifs = (state) => selectFavorites(state).favorites;

export const makeSelectFaveIds = createSelector(selectFavoriteGifs, (faves) => {
  console.log(faves);
  return faves.map((gif) => gif.id);
});
