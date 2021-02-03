import network from 'utils/network';

import { ADD_FAV_GIF, REMOVE_FAV_GIF, SET_ALERT, REMOVE_ALERT } from './types';

export const addFave = (gif) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: 'Added Giph to favorites!' });
  dispatch({ type: ADD_FAV_GIF, payload: gif });
};
export const removeFave = (id) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: 'Removed Giph from favorites!' });
  dispatch({ type: REMOVE_FAV_GIF, payload: id });
};

export const removeAlert = () => ({ type: REMOVE_ALERT });
