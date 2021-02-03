import network from 'utils/network';
import axios from 'axios';

import {
  ADD_FAV_GIF,
  REMOVE_FAV_GIF,
  SET_ALERT,
  REMOVE_ALERT,
  GET_FAVES,
} from './types';

export const addFave = (gif) => async (dispatch) => {
  try {
    dispatch({ type: SET_ALERT, payload: 'Added Giph to favorites!' });
    dispatch({ type: ADD_FAV_GIF, payload: gif });
    await axios.post('faves', gif);
  } catch (err) {
    console.error(err.response);
  }
};
export const removeFave = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_ALERT, payload: 'Removed Giph from favorites!' });
    dispatch({ type: REMOVE_FAV_GIF, payload: id });
    await axios.delete(`faves/${id}`);
  } catch (err) {
    console.error(err.response);
  }
};

export const getFaves = () => async (dispatch) => {
  try {
    const res = await fetch('/faves');
    const data = await res.json();
    dispatch({ type: GET_FAVES, payload: data });
  } catch (err) {
    console.error(err.response);
  }
};

export const removeAlert = () => ({ type: REMOVE_ALERT });
