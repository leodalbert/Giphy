import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

import Favorites from '../components/Favorites';
import { gifs } from 'containers/DashboardContainer/__test__/fixtures';

describe('The Favorites page', () => {
  const defaultProps = {
    gifs: [],
    loading: false,
  };
  it('should display a progress bar when loading', () => {
    render(<Favorites {...defaultProps} loading={true} />);
    expect(screen.queryByRole('progressbar')).toBeTruthy();
  });
  it('should display one card for each item in input array', () => {
    render(
      <Provider store={store}>
        <Favorites {...defaultProps} gifs={gifs} />
      </Provider>
    );
    expect(screen.queryAllByRole('img')).toHaveLength(3);
  });
});
