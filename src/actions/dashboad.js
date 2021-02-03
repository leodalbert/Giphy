import network from 'utils/network';

import { GET_TRENDING } from './types';

export const getTrending = () => async (dispatch) => {
  try {
    const res = await network.getTrendingGifs();
    dispatch({ type: GET_TRENDING, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
