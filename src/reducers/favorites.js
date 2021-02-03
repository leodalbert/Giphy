import produce from 'immer';
import { ADD_FAV_GIF, REMOVE_FAV_GIF, GET_FAVES } from 'actions/types';

export const initialState = {
  favorites: [],
  favLoading: true,
};

/* eslint-disable no-param-reassign */
const dashboard = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case GET_FAVES:
        draft.favorites = payload;
        draft.favLoading = false;
        break;
      case ADD_FAV_GIF:
        draft.favorites.push(payload);
        break;
      case REMOVE_FAV_GIF:
        draft.favorites = state.favorites.filter((gif) => gif.id !== payload);
        break;
      default:
        break;
    }
  });

export default dashboard;
