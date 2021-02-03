import produce from 'immer';
import { GET_TRENDING, GET_SEARCH, SEARCH_LOADING } from 'actions/types';

export const initialState = {
  trending: [],
  searchResults: [],
  searchLoading: false,
};

/* eslint-disable no-param-reassign */
const dashboard = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case GET_TRENDING:
        draft.trending = payload;
        break;
      case GET_SEARCH:
        draft.searchResults = payload;
        draft.searchLoading = false;
        break;
      case SEARCH_LOADING:
        draft.searchLoading = true;
        break;
      default:
        break;
    }
  });

export default dashboard;
