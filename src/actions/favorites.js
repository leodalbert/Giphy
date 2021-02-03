import network from 'utils/network';

import { ADD_FAV_GIF, REMOVE_FAV_GIF, SELECT_GIF } from './types';

export const addFave = (gif) => (dispatch) => {
  dispatch({ type: ADD_FAV_GIF, payload: gif });
};
export const removeFave = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FAV_GIF, payload: id });
};
export const selectGif = (id) => (dispatch) => {
  dispatch({ type: SELECT_GIF, payload: id });
};
