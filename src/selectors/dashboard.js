import { initialState } from 'reducers/dashboard';

export const selectDashboard = (state) => state.dashboard || initialState;

export const selectSearchResults = (state) =>
  selectDashboard(state).searchResults;

export const selectDashboardLoading = (state) =>
  selectDashboard(state).searchLoading;
