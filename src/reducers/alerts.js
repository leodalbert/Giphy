import produce from 'immer';
import { SET_ALERT, REMOVE_ALERT } from 'actions/types';

export const initialState = {
  alert: '',
};

/* eslint-disable no-param-reassign */
const dashboard = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_ALERT:
        draft.alert = payload;
        break;
      case REMOVE_ALERT:
        draft.alert = '';
        break;
      default:
        break;
    }
  });

export default dashboard;
