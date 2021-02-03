import network from 'utils/network';

import { GET_TRENDING, GET_SEARCH, SEARCH_LOADING } from './types';

export const getTrending = () => async (dispatch) => {
  try {
    const res = await network.getTrendingGifs();
    dispatch({ type: GET_TRENDING, payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const searchGifs = (str) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_LOADING });
    const res = await network.searchGifs(str);

    dispatch({
      type: GET_SEARCH,
      payload: res.data.data.map((gif) => ({
        id: gif.id,
        original: gif.images.original,
        fixed_height: gif.images.fixed_height_downsampled,
      })),
    });
  } catch (err) {
    console.log(err);
  }
};
